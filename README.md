# mern-docker-compose

## Frontend React Setup

vite.config.js
needs to be updated

### vite config

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
base: "/",
plugins: [react()],
server: {
port: 5173,
host: "0.0.0.0",
strictPort: true,
},
preview: {
port: 5173,
host: "0.0.0.0",
},
});

### Dockerfile

FROM node:22-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

## Backend setup express.js

### Dockerfile

FROM node:22

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm ci

COPY . .

EXPOSE 5005

CMD ["npm", "run", "dev"]

## docker-compose.yml

version: "3.4"

services:

#### React client (frontend)

client:
build:
context: ./client
dockerfile: Dockerfile
ports: - "5173:5173"
volumes: - ./client:/app - /app/node_modules
command: npm run dev
environment: - NODE_ENV=development # Optional: depends_on so Express starts after client # depends_on: # - server # Optional: restart policy
restart: unless-stopped

#### Express server (backend)

server:
build:
context: ./server
dockerfile: Dockerfile
ports: - "5005:5005"
volumes: - ./server:/app
command: npm run dev
environment: - NODE_ENV=development # Optional: environment variables
restart: unless-stopped
