#FROM jenkins/jenkins:lts


# link: https://forums.docker.com/t/using-docker-in-a-dockerized-jenkins-container/322/10

FROM jenkins/jenkins:2.73.2

# install docker, docker-compose, docker-machine
# see: https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/
# see: https://docs.docker.com/engine/installation/linux/linux-postinstall/
# see: https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/

USER root

RUN apt-get update && \
		apt-get -y install apt-transport-https \
		     ca-certificates \
		     curl \
		     gnupg2 \
		     software-properties-common && \
		curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg > /tmp/dkey; apt-key add /tmp/dkey && \
		add-apt-repository \
		   "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
		   $(lsb_release -cs) \
		   stable" && \
		apt-get update && \
		apt-get -y install docker-ce

# give jenkins docker rights
RUN usermod -aG docker jenkins

USER jenkins
