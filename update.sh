#!/bin/bash
# Pull the latest changes
git pull origin main

# Deploy updates
firebase deploy
