FROM nginx:stable-alpine

COPY ./dist/apps/device-admin /usr/share/nginx/html

COPY ./apps/device-admin/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
