FROM node:latest AS build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm ci --only=production

# node:14-alpine
FROM node:lts-alpine@sha256:cc1a31b2f4a3b8e9cdc6f8dc0c39a3b946d7aa5d10a53439d960d4352b2acfc0
# Setting NODE_ENV to production will fail. See https://github.com/nocodb/nocodb/issues/264
# ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/ /usr/src/app/
COPY ./index.js /usr/src/app/
CMD ["node", "index.js"]