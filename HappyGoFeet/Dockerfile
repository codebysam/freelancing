FROM nginx
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs
COPY     ./nginx.conf /etc/nginx/nginx.conf
COPY     . /data/app
WORKDIR /data/app
RUN npm install -g @angular/cli
RUN npm rebuild node-sass
RUN npm install --unsafe-perm
RUN ng build --prod
CMD ["nginx", "-g", "daemon off;"]
