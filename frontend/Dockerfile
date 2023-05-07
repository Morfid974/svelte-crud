FROM node:20 as build
FROM nginx:1.23.4-alpine
COPY ./front.conf /front.conf
EXPOSE 80

COPY ./start.sh /start.sh
RUN chmod 777 /start.sh
RUN chmod +x /start.sh
CMD /start.sh