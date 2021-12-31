FROM node:lts-alpine

WORKDIR /app

# Expose env
ENV PORT=3334
EXPOSE ${PORT}

# Copy over and install dependencies
COPY ./dist/apps/api/package.json ./
RUN yarn

# Add additional dependencies
RUN yarn add reflect-metadata tslib rxjs @nestjs/platform-express

# Copy remaining source
COPY ./dist/apps/api .

# Start Server
CMD node ./main.js
