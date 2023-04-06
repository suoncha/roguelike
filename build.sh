DOCKER_BUILDKIT=1 docker build -t game .
docker-compose --env-file ./.env up  -d