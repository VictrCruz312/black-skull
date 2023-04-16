# Ambiente de desenvolvimento

FROM node:14-alpine AS development

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./

CMD ["yarn", "start"]

# Ambiente de produção
FROM nginx:alpine AS production

WORKDIR /usr/share/nginx/html

COPY --from=development . .

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]