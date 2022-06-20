# https://hub.docker.com/_/httpd

# docker_reverse_proxy

build
docker build -t reverse_proxy .
docker images
docker login --username=wombach
docker tag fabf8e81e3c0 wombach/docker-reverse-proxy:1.0.8
docker push wombach/docker-reverse-proxy:1.0.8

run
docker run -dit -p 8080:80 reverse_proxy

connect with web browser to http://127.0.0.1:8080/

The docker container can consume a enviornment variable NAMESPACE.
The script /usr/local/apache2/init/init_index_html.sh uses this variable to set the base url of the index.html and prefixes the value of the variable to /atlas/

Please note the atlas URL will NOT work since the base url is not set properly and the appliction requires keycloack. A proper setup is described in the helm chart wombach/helm-governance.

Adjusting the elastic app-search key
====================================
The distribution does have a specific elastic app-search key encoded. To adjust the key with the right one, please use the following commands:

```bash
mv main-es5.js main-es5.js.orig
mv main-es2015.js main-es2015.js.orig
sed "s/search-ot1rcw3uffpojw1tz299upw1/search-zxkmwhnh49qqdgj4txtr2tqk/g" main-es5.js.orig > main-es5.js
sed "s/search-ot1rcw3uffpojw1tz299upw1/search-zxkmwhnh49qqdgj4txtr2tqk/g" mv main-es2015.js.orig > mv main-es2015.js
```
