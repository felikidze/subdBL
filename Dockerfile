FROM node:16

WORKDIR /usr/src/app

RUN npm install pm2 -g

COPY package*.json ./
RUN npm install --only=prod

COPY . .
EXPOSE 5000
CMD ["pm2-runtime", "app.js"]