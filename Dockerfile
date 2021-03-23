FROM node:14.16.0 as build

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN yarn

COPY . .

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build /var/www


COPY nginx/nginx.conf /etc/nginx/nginx.conf

# COPY default.conf.template /etc/nginx/conf.d/default.conf.template

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'