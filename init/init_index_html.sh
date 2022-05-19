#!/bin/bash
if [[ -v NAMESPACE ]]; then
    mv /usr/local/apache2/htdocs/atlas/index.html /usr/local/apache2/htdocs/atlas/index_.h
    sed "s/<base href=\"\//<base href=\"\/$NAMESPACE\/atlas\//g" /usr/local/apache2/htdocs/atlas/index_.h > /usr/local/apache2/htdocs/atlas/index.html
    rm -f /usr/local/apache2/htdocs/atlas/index_.h
fi
