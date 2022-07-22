# https://hub.docker.com/_/httpd

# docker_reverse_proxy

build
------
docker build -t reverse_proxy .
docker images
docker login --username=wombach
docker tag fabf8e81e3c0 wombach/docker-reverse-proxy:1.0.9.3
docker push wombach/docker-reverse-proxy:1.0.9.3

run
docker run -dit -p 8080:80 reverse_proxy

connect with web browser to http://127.0.0.1:8080/

The docker container can consume a enviornment variable NAMESPACE.
The script /usr/local/apache2/init/init_index_html.sh uses this variable to set the base url of the index.html and prefixes the value of the variable to /atlas/

Please note the atlas URL will NOT work since the base url is not set properly and the appliction requires keycloack. A proper setup is described in the helm chart wombach/helm-governance.

The docker container expects two environment variables:
- ATLAS_APP_SEARCH_TOKEN: which contains the search key for the elastic enterprise app-search backend
- NAMESPACE: which is used as the base url for the frontend application
