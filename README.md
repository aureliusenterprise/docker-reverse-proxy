# docker_reverse_proxy

build
docker build -t reverse_proxy .
docker image
docker login --username=wombach
docker tag fabf8e81e3c0 wombach/docker-reverse-proxy:1
docker push wombach/docker-reverse-proxy:1

run
docker run -dit -p 8080:80 reverse_proxy

connect with web browser to http://127.0.0.1:8080/