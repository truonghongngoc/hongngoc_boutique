FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in "conf.d/" dir get included in main config
COPY default.conf /etc/nginx/conf.d/
#COPY ./localhost.pem /etc/nginx/conf.d/localhost.pem
#COPY ./localhost-key.pem /etc/nginx/conf.d/localhost-key.pem

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]