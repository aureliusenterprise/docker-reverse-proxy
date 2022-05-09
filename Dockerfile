FROM httpd:2.4
LABEL maintainer="andreas.wombacher@aureliusenterprise.com"
COPY ./public-html/ /usr/local/apache2/htdocs/
#COPY ./public-html/ /usr/local/apache2/htdocs/
