# 商品中心

location / {
  # {{{custName}}}-dplatform-goods 项目 dist 目录
  root <todoPESetProjectRootPath>;
  try_files $uri $uri/ /index.html;
}

location /api/goods {
  # 加 / 重写
  proxy_pass http://aquarius-caerus-goods-bops/;
}

# 投保流程配置

location ^~ /flowConf/ {
  # {{{custName}}}-dplatform-flow-h5 项目 dist 目录, 以 / 结尾
  alias <todoPESetProjectRootPath>/;
  try_files $uri $uri/ /flowConf/index.html;
}

location /api/ {
  # 加 / 重写
  proxy_pass http://aquarius-caerus-goods-bops/;
}

# 模版工具

# location ^~ /templateTool/ {
#   # {{{custName}}}-dplatform-template 项目 dist 目录, 以 / 结尾
#   alias <todoPESetProjectRootPath>/;
#   try_files $uri $uri/ /templateTool/index.html;
# }
# location /backServer/goods/ {
#   # 加 / 重写
#   proxy_pass http://aquarius-caerus-goods-bops/;
# }
# location /backServer/ {
#   # 加 / 重写
#   proxy_pass http://aquarius-caerus-template-biz/;
# }
location /health {
  add_header Content-Type text/plain;
  return 200 "ok";
}
