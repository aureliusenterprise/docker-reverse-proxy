# https://hub.docker.com/_/httpd

# docker_reverse_proxy

build
docker build -t reverse_proxy .
docker images
docker login --username=wombach
docker tag fabf8e81e3c0 wombach/docker-reverse-proxy:1
docker push wombach/docker-reverse-proxy:1

run
docker run -dit -p 8080:80 reverse_proxy

connect with web browser to http://127.0.0.1:8080/

The docker container can consume a enviornment variable NAMESPACE.
The script /usr/local/apache2/init/init_index_html.sh uses this variable to set the base url of the index.html and prefixes the value of the variable to /atlas/