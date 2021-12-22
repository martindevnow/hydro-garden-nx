FROM node:lts-alpine

WORKDIR /app
COPY ./dist/apps/api .
ENV PORT=3334
EXPOSE ${PORT}
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express
CMD node ./main.js