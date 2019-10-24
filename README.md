## Two steps to start developing:
### 1. build the container and install gatsby starter inside:
### to build container run
```bash
docker build -t shape-detect .
```

### to spin up container run
```bash
docker run -it --rm -p 8000:8000 -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app shape-detect /bin/bash

docker run -it --rm -p 8000:8000 -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app shape-detect
``` 

### and finally create new gatsby project (run inside the container)
```bash
git config --global user.email "spam_box@some.edu"
git config --global user.name "spam_me"
cd ..
gatsby new blog
```

### 2. To start developing:
```bash
docker run -it --rm -p 8000:8000 -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app shape-detect
```

no need to rebuild the container when developing, just run the docker command above and do stuff

## demo link
https://svirmi.github.io/shape-detection/