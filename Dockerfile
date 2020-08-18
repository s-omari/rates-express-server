# specify the node base image desired version node:<version>
FROM node:10
WORKDIR /index
COPY package.json /index
RUN npm install
COPY . /index
CMD node index.js
#  application's default port
EXPOSE 3000