
//build docker image -> docker build -t hello-wolrd-app .;
//chekc how many images are present in my machine => docker images;
//run docker application => docker -p 3000:3000 hello-wolrd-app
//check how many apps are running in machine port => docker ps
//kill port => docker kill {port:number}
//to add environment variable => docker run -p 3000:3000 -e DATABASE_URL=subrat08 hello-world-app .