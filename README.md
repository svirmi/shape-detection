## 1 init project
```bash
docker run -it --rm -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app node:11 /bin/sh
```
inside docker container run
```bash
cd app && yarn install
```
## 2 to build a project
run ```yarn dev``` or ```yarn build``` for minified version inside docker container in /app folder 

## demo link
https://svirmi.github.io/shape-detection/