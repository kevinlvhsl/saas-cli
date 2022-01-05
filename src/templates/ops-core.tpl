# 经代核心

# 主应用
location / {
  # {{{custName}}}-ops-core 项目 dist 目录
  root <todoPESetProjectRootPath>;
  try_files $uri $uri/ /index.html;
}

# 公式目录
location /formulaManage/ {
  # {{{custName}}}-ops-formula 项目 dist 目录, 以 / 结尾 替换时注意保留"/"
  alias <todoPESetProjectRootPath>/;
  try_files $uri $uri/ /formulaManage/index.html;
}

location ^~ /api/bops/ {
  proxy_pass http://aquarius-bops;
}

location ^~ /api/zhs/ {
  proxy_pass http://aquarius-bops;
}

# 经代2B核心目录
location /tobCore/ {
  # {{{custName}}}-ops-tobcore 项目 dist 目录, 以 / 结尾
  alias <todoPESetProjectRootPath>/;
  try_files $uri $uri/ /tobCore/index.html;
}

location /api/base/ {
  # 加 / 重写
  proxy_pass http://aquarius-bops/;
}

location /api/commander {
  rewrite ^/api/commander/(.*)$ /api/$1 break;
  proxy_pass http://aquarius-commander;
}

location /health {
  add_header Content-Type text/plain;
  return 200 "ok";
}
