FROM alpine:latest AS backend

# install python3 and all required dependencies for
# our backend.
RUN apk --update add python3 py3-psycopg2

RUN pip3 install --upgrade pip

RUN pip3 install pipenv

WORKDIR /code

COPY Pipfile .

COPY Pipfile.lock .

RUN pipenv install --system --pre

# copy all source code of the project
COPY . .

# run migrate of django project
RUN python3 manage.py migrate

# port end execution configuration
EXPOSE 8000

CMD ["runserver", "0.0.0.0:8000"]

ENTRYPOINT ["python3", "manage.py"]