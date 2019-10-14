FROM node:10

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package*.json /app/
RUN npm install
RUN npm install -g @angular/cli

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0