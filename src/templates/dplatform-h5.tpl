
# 投保流程

location / {
  # {{{custName}}}-dplatform-h5 项目 dist 目录
  root <todoPESetProjectRootPath>;
  try_files $uri $uri/ /index.html;
}

location /api/v1/goods/ {
  rewrite ^/api/(.*)$ /$1 break;
  proxy_pass http://aquarius-caerus-goods-bops;
}

# 商品中心服务地址转发
location /api/v1/ {
  rewrite ^/api/(.*)$ /$1 break;
  proxy_pass http://aquarius-caerus-goods-front;
}

# 经代服务地址转发
location /api/commander/ {
  rewrite ^/api/commander/(.*)$ /api/$1 break;
  proxy_pass http://aquarius-commander;
}

location /health {
  add_header Content-Type text/plain;
  return 200 "ok";
}
