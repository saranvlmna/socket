FROM node:14
ENV NODE_ENV=production
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=4096

WORKDIR /usr/src/app

COPY . .

RUN npm install --production
RUN npm i mysql2
RUN npm install -g pm2

CMD ["pm2-runtime","--name","core","app.js"]