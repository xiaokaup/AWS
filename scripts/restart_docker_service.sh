pwd
{
	docker-compose down
} || {
	echo "Fail to down docker"
}
docker-compose up -d --build nginx
docker-compose up -d --build jenkins
