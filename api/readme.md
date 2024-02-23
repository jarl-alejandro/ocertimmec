- users
- traiding
- certificate
- clients
ssh occertimm@206.189.189.113
mecatronica2014

date --set "2018-01-13 16:00"

pm2 start npm --name "api" -i 0 -- run start
mongodump --db db-occertimm --out ./occertimm

sudo ln -s /etc/nginx/sites-available/app.occertimmec.com /etc/nginx/sites-enabled/app.occertimmec.com


upstream app.occertimmec.com {
  server 127.0.0.1:8001;
}

server {

        server_name app.occertimmec.com;

        location / {
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarder-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;
                proxy_set_header X-NginX-Proxy true;

                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";

                proxy_pass http://app.occertimmec.com;
                proxy_redirect off;

        }
}
