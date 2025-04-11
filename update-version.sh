#!/bin/bash

# Get current timestamp
if [[ "$OSTYPE" == "cygwin" || "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  timestamp=$(powershell.exe -Command "Get-Date -UFormat %s")
else
  timestamp=$(date +%s)
fi

# Update version.json with the new timestamp
if [[ "$OSTYPE" == "cygwin" || "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  echo "MS Windows"
  powershell.exe -Command "(Get-Content ./public/version.json) -replace '\"updatedAt\": \".*\"', '\"updatedAt\": \"$timestamp\"' | Set-Content ./public/version.json"
else
  echo "Unix-like OS"
  sed -i '' "s/\"updatedAt\": \".*\"/\"updatedAt\": \"$timestamp\"/" ./public/version.json
fi

# Add the updated file to git
git add ./public/version.json
