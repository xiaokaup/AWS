FROM python:3.4
ADD . /docker      
ADD ../../src /src  # ADD的源路径应该在Dockerfile文件的上下文环境中（即Dockerfile文件所在根目录及其子目录下，如ADD . /src是合法的，而ADD ../../src /src不合法），此处为了清晰的项目结构，只是展示ADD指令，实际中应该用volumes挂载
WORKDIR /src
RUN pip install -r requirements.txt
CMD ["python", "app.py"]