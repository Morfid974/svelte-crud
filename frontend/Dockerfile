FROM node:16 as build
FROM nginx:1.16.0-alpine
COPY ./front.conf /front.conf
EXPOSE 80

COPY ./start.sh /start.sh
RUN chmod 777 /start.sh
RUN chmod +x /start.sh
CMD /start.sh