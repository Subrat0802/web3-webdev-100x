# Use official Node.js image with Alpine (small size)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package manifests
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

# Install dependencies
RUN npm install

# Copy entire project after installing dependencies (best practice)
COPY . .

# Set environment variable for database connection
ENV DATABASE_URL=postgresql://postgres:subrat08@postgres:5432/postgres
# 🟡 CHANGED localhost → postgres (Docker service name!)

# Generate Prisma client
RUN npx prisma generate

# Build the TypeScript code
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Final startup command
CMD ["npm", "run", "dev:docker"]

