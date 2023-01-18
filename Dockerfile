FROM node:16.13.1-alpine3.15

ENV DBPASSWORD P@ssw0rd1234

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

EXPOSE 3200

CMD ["npm", "run", "start"]