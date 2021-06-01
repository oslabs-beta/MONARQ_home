FROM node:14.16
RUN npm install -g webpack
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
EXPOSE 3000