FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

# Only generate Prisma client — do NOT run `migrate dev` here
RUN npx prisma generate

RUN npm run build

EXPOSE 3000

# Run migrations and then start the app inside docker-compose or an entrypoint script
CMD ["npm", "run", "dev:docker"]
