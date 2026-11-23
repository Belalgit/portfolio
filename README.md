# Md Belal Islam — Executive Portfolio

A zero-build, animated executive portfolio using semantic HTML, modern CSS and vanilla JavaScript. The production image is served directly by Nginx, so there is no Node/npm dependency in production.

## Run with Docker

```bash
docker compose up -d --build
```

Open:

```text
http://SERVER_IP:8080
```

## Stop

```bash
docker compose down
```

## Update content

- Main page/content: `index.html`
- Dynamic profile lists: `script.js`
- Visual design/animations: `styles.css`
- Web server/security headers: `nginx.conf`

After editing:

```bash
docker compose up -d --build
```

## Recommended domain setup

```text
Internet -> Cloudflare/DNS -> HTTPS reverse proxy -> 127.0.0.1:8080 -> Portfolio container
```

Example host Nginx block:

```nginx
server {
    listen 443 ssl http2;
    server_name portfolio.example.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Use Certbot or your existing TLS setup for certificates.
