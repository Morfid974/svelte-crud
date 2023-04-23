#!/bin/sh
envsubst '${BACKPORT}' < /front.conf > /etc/nginx/conf.d/default.conf
nginx -g 'daemon off;'
