FROM node:18-alpine AS deps

WORKDIR /app

RUN npm install --global pnpm
COPY --from=base . .
RUN pnpm install --no-frozen-lockfile

FROM deps as build

RUN pnpm --filter denarius-client build

# Final production image
FROM nginx:alpine

WORKDIR /app

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/src/denarius/denarius-client/build /usr/share/nginx/html
COPY --from=build /app/src/denarius/denarius-client/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]