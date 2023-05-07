FROM node:20-alpine
WORKDIR /app
COPY ./package*.json /app/
RUN yarn install
EXPOSE 3000
WORKDIR /app/backend
CMD ["node", "backend.js"]
