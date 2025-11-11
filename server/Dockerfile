# Use a lightweight Node.js image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Expose port 5005
EXPOSE 5005

# Start the server
CMD ["npm", "run", "dev"]