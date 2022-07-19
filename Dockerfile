FROM httpd:2.4
LABEL maintainer="andreas.wombacher@aureliusenterprise.com"
COPY ./htdocs/ /usr/local/apache2/htdocs/
COPY ./atlas/ /usr/local/apache2/atlas/
COPY ./init/ /usr/local/apache2/init/
COPY ./conf/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./conf.d/ /usr/local/apache2/conf.d/
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get install -y jq && \
    apt-get install -y ca-certificates