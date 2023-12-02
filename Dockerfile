FROM node:14
WORKDIR DEVOPS
COPY package*.json ./
RUN npm install
RUN npm install @fortawesome/fontawesome-svg-core
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
