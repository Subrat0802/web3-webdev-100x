# Use official Node.js image with Alpine (small size)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package manifests
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy project files after dependencies
COPY . .

# Generate Prisma client (needs DATABASE_URL, will be set by docker-compose at runtime)
RUN npx prisma generate

# Build TypeScript code
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev:docker"]
