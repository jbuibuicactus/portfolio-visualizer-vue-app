
FROM node:latest

WORKDIR /app

CMD ls -ltr 
CMD npm install
CMD npm run serve