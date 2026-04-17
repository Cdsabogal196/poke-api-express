FROM node:24.13.1-alpine

WORKDIR /the/workdir/path
COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm","run", "start"]