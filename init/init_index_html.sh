#!/bin/bash
if [[ -v NAMESPACE ]]; then
    mv /usr/local/apache2/atlas/index.html /usr/local/apache2/atlas/index.orig.html
    sed "s/<base href=\"\//<base href=\"\/$NAMESPACE\/atlas\//g" /usr/local/apache2/atlas/index.orig.html > /usr/local/apache2/atlas/index.html
    #rm -f /usr/local/apache2/atlas/index_.h

    #set -- /usr/local/apache2/atlas/main-es*.js
    #mv "$1" /usr/local/apache2/atlas/main-es.h
    mkdir /usr/local/apache2/bak/
    cp /usr/local/apache2/atlas/main-es*.js /usr/local/apache2/bak/
    sed -i "s/url:'\/auth'/url:'\/$NAMESPACE\/auth'/g" /usr/local/apache2/atlas/main-es*.js
    sed -i "s/url: '\/auth'/url:'\/$NAMESPACE\/auth'/g" /usr/local/apache2/atlas/main-es*.js
fi
