FROM nginx:1.20-alpine

# Copy the build output to replace the default nginx contents.
COPY ./dist/* /usr/share/nginx/html
