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
 - Start postgres
    - docker run -e POSTGRESS_PASSWORD=subrat08 -d -p 54332:5432 postgres
 - Build the image - `docker build -t user-project.`
 - Start the image - `docker run -p 3000:3000 user-project` 

##Docker Compose installation steps
 - Install docker, docker-compose
 - Run `docker-compose up`