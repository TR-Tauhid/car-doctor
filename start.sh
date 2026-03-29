#!/bin/bash

# Start the backend in a new Command Prompt window
start cmd /k "cd backend && nodemon ./index.js"

# Start the frontend in another new Command Prompt window
start cmd /k "cd frontend && npm run dev"

