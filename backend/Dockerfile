FROM tensorflow/tensorflow:2.2.0rc2-py3

WORKDIR /app

RUN ["pip3", "install", "flask"]
RUN ["pip3", "install", "flask-cors"]

COPY . ./
# RUN ["pipenv", "install", "--system", "--deploy"]

CMD ["python3", "app.py"]