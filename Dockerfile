FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm cache clean --force
RUN npm install --production --legacy-peer-deps

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

ENV PORT 1716
ENV NODE_ENV production
EXPOSE 1716

CMD ["npm", "start"]