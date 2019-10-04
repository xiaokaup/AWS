FROM python:3.4
ADD . /docker
WORKDIR /src
RUN pip install -r requirements.txt
CMD ["python", "app.py"]