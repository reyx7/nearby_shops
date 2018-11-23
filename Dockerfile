# forntend part
FROM node:alpine AS forntend

WORKDIR /code

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]

# backend part
FROM alpine:latest AS backend

WORKDIR /code

RUN apk --update add python3 py3-psycopg2

RUN pip3 install --upgrade pip

RUN pip3 install pipenv

COPY Pipfile .

COPY Pipfile.lock .

RUN pipenv install --system --pre

# copy all source code of the project
COPY . .

COPY --from=forntend /code/build ./static

# port end execution configuration
EXPOSE 8000


CMD ["runserver", "0.0.0.0:8000"]

ENTRYPOINT ["python3", "manage.py"]