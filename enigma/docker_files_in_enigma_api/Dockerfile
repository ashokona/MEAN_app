FROM node:7-alpine
MAINTAINER INNOMINDSLABS

EXPOSE  8000

# Set development environment as default
ENV NODE_ENV development
ENV AWSCLI_VERSION "1.10.38"
ENV PACKAGES "groff less python py-pip"

# Install Utilities
RUN apk  update   \
 && apk add -q \
 curl \
 git \
 openssh \
 ansible \
 sudo \
 python
# && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN apk add --update $PACKAGES \
    && pip install awscli==$AWSCLI_VERSION \
    && pip install --upgrade pip \
    &&  pip install boto \
    && apk --purge -v del py-pip \
    && rm -rf /var/cache/apk/*
# Install nodejs
RUN npm update &&  npm install -g angular-cli tslint typescript && mkdir /etc/ansible

COPY ./enigma/ /etc/ansible/
RUN pwd && ls -ltr /etc/ansible/
COPY . /opt/enigma-api
WORKDIR /opt/enigma-api/
RUN pwd && ls -ltr
# Install npm packages
RUN npm install --quiet 
CMD ["npm", "start"]
