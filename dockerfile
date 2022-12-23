# 1) Node image for building frontend assets
# Name the node stage "builder"
FROM node:16-slim AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN yarn && yarn build

# 2) nginx stage to serve frontend assets
# nginx state for serving content
FROM nginx:alpine
# Update nginx configure
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]