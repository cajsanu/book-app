FROM node:20
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install && cd ./src/client && npm install

ARG DATABASE_URL
ARG SECRET

ENV DATABASE_URL=$DATABASE_URL
ENV SECRET=$SECRET

RUN cd ./src/client && npm run build
  
USER node

CMD ["npm", "start"]