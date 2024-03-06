# Stage 1: Build app
FROM node:18.19-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve it using Ngnix
FROM nginx:stable-alpine
COPY --from=build /app/dist/developer-portfolio /usr/share/nginx/html
EXPOSE 80
