#!/bin/bash
if [[ ! -v NAMESPACE ]]; then
    mv /usr/local/apache2/htdocs/atlas/index.html /usr/local/apache2/htdocs/index_.h
    sed "s/<base href=\"\/atlas\//<base href=\"\/$NAMESPACE\/atlas\//g" /usr/local/apache2/htdocs/index_.h > /usr/local/apache2/htdocs/index.html
    rm -f atlas/index_.h
fi
