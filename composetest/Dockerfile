FROM python:3.7-alpine
WORKDIR /code

# Install gcc so Python packages such as MarkupSafe and SQLAlchemy can compile speedups.
RUN apk add --no-cache gcc musl-dev linux-headers

COPY ./src/requirements.txt requirements.txt
RUN pip install -r requirements.txt
CMD ["flask", "run"]