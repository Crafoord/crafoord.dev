# base image
FROM node:15.2.1-alpine
# working directory
WORKDIR /app
# add binaries to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install and cache app dependencies
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci
# copy app files and build
COPY . /app
RUN npm run build
# start app
CMD [ "npm", "start" ]