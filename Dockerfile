FROM node:20-alpine
WORKDIR /app
COPY app.js .
EXPOSE 3000

HEALTHCHECK --interval=3s --timeout=1s --retries=5 \
  CMD wget -qO- http://localhost:3000 || exit 1

CMD ["node", "app.js"]
