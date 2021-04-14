# FROM node:12.18-alpine
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# CMD ["npm", "start"]


FROM node:12.18-alpine As development

ENV PORT=3333
ENV PORT_SSR=4000

EXPOSE ${PORT}

WORKDIR /usr/src/app

COPY ["package*.json", "nx.json", "./"]
# COPY nx.json .

RUN npm install

COPY . .

RUN npm install -g @angular/cli 
RUN npm install -g @nrwl/cli@12.0.1

RUN nx build --prod
CMD nx serve backend