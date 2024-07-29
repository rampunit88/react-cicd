#Use the official Node.js image as base image
FROM node:20-alpine

#Set the working directoryinside teh container
WORKDIR /app

#Copy package.json and package-loc.json files
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy the rest of the application code
COPY . .

#Build the application
RUN npm run build

#Expose the port the app runs on
EXPOSE 3000

#Command to start the application
CMD [ "npm", "start" ]