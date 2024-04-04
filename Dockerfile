FROM node:18.14.2-alpine AS builder

WORKDIR /chooseYourWebMap

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.21.0-alpine

COPY --from=builder /chooseYourWebMap/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]