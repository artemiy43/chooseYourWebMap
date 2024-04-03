# FROM node:18.14.2-alpine

# WORKDIR /chooseYourWebMap

# COPY ./package.json .

# RUN npm install

# COPY . .

# CMD ["npm", "run", "dev"]


FROM node:18.14.2-alpine AS builder

# make the 'app' folder the current working directory
WORKDIR /chooseYourWebMap

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json .

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

RUN npm run build

FROM nginx:1.21.0-alpine

COPY --from=builder /chooseYourWebMap/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]