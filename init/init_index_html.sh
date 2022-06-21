#!/bin/bash
if [[ -v NAMESPACE ]]; then
    mv /usr/local/apache2/atlas/index.html /usr/local/apache2/atlas/index.orig.html
    sed "s/<base href=\"\//<base href=\"\/$NAMESPACE\/atlas\//g" /usr/local/apache2/atlas/index.orig.html > /usr/local/apache2/atlas/index.html
    #rm -f /usr/local/apache2/atlas/index_.h

    #set -- /usr/local/apache2/atlas/main-es*.js
    #mv "$1" /usr/local/apache2/atlas/main-es.h
    mkdir /usr/local/apache2/bak/
    cp /usr/local/apache2/atlas/main*.js /usr/local/apache2/bak/
    sed -i "s/atlas:{appSearchToken:\"[a-z0-9\-]*\"/atlas:{appSearchToken:\"$ATLAS_APP_SEARCH_TOKEN\"/g" /usr/local/apache2/atlas/main*.js
    sed -i "s/url:\"\/auth\"/url:\"\/$NAMESPACE\/auth\"/g" /usr/local/apache2/atlas/main*.js
fi
