FROM node:18.15.0-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock .swcrc ./

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "run", "start" ]
