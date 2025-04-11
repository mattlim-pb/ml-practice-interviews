const axios = require('axios');
const { execSync } = require('child_process');

const ENVIRONMENTS = {
  dev: {
    url: 'https://dev.practiceinterviews.com',
    herokuApp: 'pi-web-dev',
    retryAttempts: 3,
    retryDelay: 60000 // 1 minute
  },
  stage: {
    url: 'https://stage.practiceinterviews.com',
    herokuApp: 'pi-web-stage',
    retryAttempts: 3,
    retryDelay: 60000
  },
  prod: {
    url: 'https://app.practiceinterviews.com',
    herokuApp: 'pi-web-prod',
    retryAttempts: 5,
    retryDelay: 30000 // 30 seconds for prod - faster recovery
  }
};

async function checkHealth(env) {
  const config = ENVIRONMENTS[env];
  if (!config) {
    console.error(`Invalid environment: ${env}`);
    process.exit(1);
  }

  let attempts = 0;

  async function attemptRestart() {
    try {
      // Check if the app is responding
      const response = await axios.get(`${config.url}/welcome`, {
        timeout: 5000,
        validateStatus: false
      });

      if (response.status !== 200) {
        throw new Error(`Unhealthy response: ${response.status}`);
      }

      console.log(`[${env}] Health check passed`);
      return true;
    } catch (error) {
      console.error(`[${env}] Health check failed:`, error.message);

      if (attempts < config.retryAttempts) {
        attempts++;
        console.log(`[${env}] Attempting restart (${attempts}/${config.retryAttempts})`);

        try {
          // Restart the Heroku app
          execSync(`heroku restart --app ${config.herokuApp}`);
          console.log(`[${env}] Restart initiated`);

          // Wait for the specified delay
          await new Promise(resolve => setTimeout(resolve, config.retryDelay));

          // Try health check again
          return await attemptRestart();
        } catch (restartError) {
          console.error(`[${env}] Restart failed:`, restartError.message);
          return false;
        }
      }

      return false;
    }
  }

  const isHealthy = await attemptRestart();

  return isHealthy;
}

// Get environment from command line argument
const env = process.argv[2];
if (!env) {
  console.error('Please specify environment: node healthcheck.js [dev|stage|prod]');
  process.exit(1);
}

checkHealth(env).then(isHealthy => {
  process.exit(isHealthy ? 0 : 1);
});
