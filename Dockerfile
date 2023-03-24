FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --ignore-scripts
COPY . .
RUN yarn build 

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
CMD ["nginx", "-g", "daemon off;"]

