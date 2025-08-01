FROM oven/bun:1

WORKDIR /user/src/app

COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/ws  ./apps/ws

COPY . .

RUN npm install
RUN bun run db:generate


EXPOSE 8081

CMD ["bun", "run", "start:ws"]
