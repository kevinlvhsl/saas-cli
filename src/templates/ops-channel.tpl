# 渠道平台配置

location / {
  # {{{custName}}}-ops-channel 项目 dist 目录
  root /root/app/dist;
  try_files $uri $uri/ /index.html;
}

location /api/bops/ {
  proxy_pass http://aquarius-bops;
}

location /api/commander/ {
  rewrite ^/api/commander/(.*)$ /api/$1 break;
  proxy_pass http://aquarius-commander;
}

location /health {
  add_header Content-Type text/plain;
  return 200 "ok";
}
