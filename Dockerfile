FROM httpd:2.4
LABEL maintainer="andreas.wombacher@aureliusenterprise.com"
COPY ./public-html/ /usr/local/apache2/htdocs/
COPY ./init/ /usr/local/apache2/init/
COPY ./conf/httpd.conf /usr/local/apache2/conf/httpd.conf
