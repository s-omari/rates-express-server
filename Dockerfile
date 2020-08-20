FROM node:12
WORKDIR /index
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
# COPY . /index
CMD [ "node", "index.js" ]
#  application's default port
EXPOSE 3000
