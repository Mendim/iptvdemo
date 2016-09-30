# UUNUS IPTV Demo

### Demo

Online demo is [here](http://iptv.uunus.com)

### Install

This demo use python3, flask and flask-login, install requirements and run gunicorn

```bash
pyvenv env/
./env/bin/pip install --upgrade pip
./env/bin/pip install -r requirements
./env/bin/gunicorn -d -b "0.0.0.0:8000" app:app
```

### Docker

```bash
docker run -d --name demo-idc -p 5000:5000 playniuniu/demo-iptv
```

### Feature

- 统计最热们的电视节目
- 统计用户的收看行为
- 根据节目的热度推送广告
- 根据用户的行为推送广告
