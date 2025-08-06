FROM node:16-alpine

WORKDIR /app

ENV DATABASE_URL="scfbcfbhc@localhost"

COPY ./package.json ./package.json

COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]