### Build Image

```
docker build -f .docker/Dockerfile -t vorteex/frontend:1.0 .
```

### Run Container

```
docker run --restart=always -d \
--name="vorteex-frontend" \
-p 3000:3001/tcp \
vorteex/frontend:1.0
```
