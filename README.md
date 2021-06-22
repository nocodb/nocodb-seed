# nocodb-seed

A simple ExpressJS app with NocoDB

## Using NPM

```
npm install
npm start
```

## Using Docker 

Build the docker image

```
docker build . -t nocodb-seed
```

Run the image as a container

```
docker run --name nocodb-seed -p 8080:8080 nocodb-seed
```

## GUI 

Then access http://localhost:8080/dashboard in your browser