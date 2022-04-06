FROM node:lts-alpine

# bind your app to the gateway IP
# ENV HOST=0.0.0.0

# make the 'app' folder the current working directory
WORKDIR /home/app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package.json /home/app/package.json

# install nodemon
RUN npm install -g nodemon

# install project dependencies
RUN npm install

EXPOSE 3000

CMD [ "npm", "start"]