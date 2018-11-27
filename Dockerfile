# Dockerfile to build a production image for the project the
# Dockerfile is splited into two chanks one for frontend end
# the other for backend the reason for that is that we want
# to only use the build version of the react.js app and not
# to install all node tools in the Django production image.


FROM node:alpine AS frontend

LABEL Maintainer="soufiane nassih <soufiane.nass7@gmail.com>"

WORKDIR /code

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]


# backend part, install dep end run app
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

COPY --from=frontend /code/build ./build

COPY --from=frontend /code/webpack-stats.prod.json .

RUN python3 manage.py collectstatic --no-input

RUN rm -r build

EXPOSE 8000


CMD ["backend.config.wsgi"]

ENTRYPOINT ["gunicorn", "-b", "0.0.0.0:8000", "--workers", "4"]