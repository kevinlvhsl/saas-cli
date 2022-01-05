# C端商城
location / {
  # {{{custName}}}-h5-client 项目 dist 目录
  root <todoPESetProjectRootPath>;
  try_files $uri $uri/ /index.html;
}

location ^~ /api/ {
  proxy_pass http://aquarius-commander;
}

location /health {
  add_header Content-Type text/plain;
  return 200 "ok";
}
