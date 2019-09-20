# What image do you want to start building on?
FROM node:12.9-alpine

# Make a folder in your image where your app's source code can live
RUN mkdir -p /usr/src/app

# Tell your container where your app's source code will live
WORKDIR /usr/src/app

# What source code do you what to copy, and where to put it?
COPY . /usr/src/app

# Does your app have any dependencies that should be installed?
RUN npm install

# What port will the container talk to the outside world with once created?
EXPOSE 3006

# How do you start your app?
CMD [ "npm", "run", "dockerStart" ]