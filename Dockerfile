FROM node:14.16.0 as build

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN yarn

COPY . .

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build /var/www

COPY --from=build /usr/src/app/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]