FROM alpine:latest
MAINTAINER playniuniu@gmail.com

WORKDIR /usr/src/web/
COPY . /usr/src/web/

RUN apk --no-cache --update add python3 \
    && pyvenv env \
    && ./env/bin/pip install --upgrade pip \
    && ./env/bin/pip install -r requirements.txt \
    && rm -r /var/cache/apk/*

ENTRYPOINT ["./env/bin/gunicorn", "-b", "0.0.0.0:5000", "app:app"]
