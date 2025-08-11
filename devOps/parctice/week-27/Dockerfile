FROM oven/bun:canary-debian

WORKDIR /user/src/app

RUN apt-get update && apt-get install -y openssl npm && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./

RUN bun install

COPY . .

ENV DATABASE_URL="postgresql://postgres:hello08@postgres:5432/postgres"

RUN bun prisma generate

EXPOSE 3000

CMD ["bun", "run", "dev"]
