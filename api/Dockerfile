FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN sed -i 's/localhost/${DB_HOST}/' .env

RUN npm run prisma:generate