## manumal installation
 - Install nodejs locally()
 - Clone the repo
 - Install dependencies (npm install)
 - Start the DB locally 
    - docker run -e POSTGRESS_PASSWORD=subrat08 -d -p 54332:5432 postgres
    - Go to neon.tect and get the yourself a new DB
 - Change the .env file and update your DB credentials
 - npx prisma migrate
 - npx prisma generate dev
 - npm run build
 - npm run start

## Docker Installation
 - Install docker
 - Create a network - `docker network create user_project_one`
 - Start postgres
    - docker run --network user_project_one --name postgresadd -e POSTGRESS_PASSWORD=subrat08 -d -p 54332:5432 postgres
 - Build the image - `docker build --network=host -t user-project .`
 - Start the image - `docker run -e DATABASE_URL=postgresql://postgres:subrat08@postgresadd:5432/postgres --netwrok user_project_one -p 3000:3000 user-project` 

##Docker Compose installation steps
 - Install docker, docker-compose
 - Run `docker-compose up`