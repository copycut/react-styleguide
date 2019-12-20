FROM node:10-alpine

ENV APP_NAME styleguide

COPY ./package.json /var/www/package.json
COPY ./styleguide.config.js /var/www/styleguide.config.js
COPY ./webpack.config.js /var/www/webpack.config.js
COPY ./styleguide /var/www/styleguide
COPY ./src /var/www/src
COPY ./test /var/www/test

WORKDIR /var/www

RUN npm install -q

CMD ["npm", "start"]
