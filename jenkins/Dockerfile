#FROM jenkins/jenkins:lts


# link: https://forums.docker.com/t/using-docker-in-a-dockerized-jenkins-container/322/10

FROM jenkins/jenkins:2.73.2

# install docker, docker-compose, docker-machine
# see: https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/
# see: https://docs.docker.com/engine/installation/linux/linux-postinstall/
# see: https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/

USER root

ARG DOCKER_CLIENT=docker-17.06.2-ce.tgz

RUN cd /tmp/
&& curl -sSL -O https://download.docker.com/linux/static/stable/x86_64/${DOCKER_CLIENT} 79 \
&& tar zxf ${DOCKER_CLIENT} \
&& mkdir -p /usr/local/bin \
&& mv ./docker/docker /usr/local/bin \
&& chmod +x /usr/local/bin/docker \
&& rm -rf /tmp/*

# docker-compose
RUN curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose

# give jenkins docker rights
RUN usermod -aG docker jenkins

USER jenkins