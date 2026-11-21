FROM node:22-alpine

WORKDIR /var/www

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]