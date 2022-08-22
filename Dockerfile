# Stage 1: Build The Angular Docker Image
FROM node:16 AS build
WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

RUN npm run build -- --output-path=./dist/out



FROM nginx
RUN apt update && apt install -y nginx-extras


RUN rm /etc/nginx/sites-enabled/default

COPY --from=build /app/dist/out/ /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
