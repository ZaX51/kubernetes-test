FROM node:14.4.0-alpine

WORKDIR /home/node/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --production && yarn cache clean

COPY . .

USER node

EXPOSE 3000

CMD [ "node", "./lib/index.js" ]
