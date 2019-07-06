## 1 init project
```bash
docker run -it --rm -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app node:11 /bin/sh
```
inside docker container run
```bash
cd app && yarn init -y
```
## 2 install brain.js
inside docker container run 
```bash
yarn add brain.js
```

## 3 install webpack as DEV dependency
run also inside container into /app folder
```bash
yarn add webpack webpack-cli -D
```

## 4 to build a project
run ```yarn dev``` or ```yarn build``` for minified version inside docker container in /app folder 

## demo link
https://svirmi.github.io/shape-detection/
