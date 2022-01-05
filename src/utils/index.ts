const Mustache = require('./mustache');
const mkdirp = require('./mkdirp');
const chalk = require('chalk');
// const JSZip = require("jszip");
// var fstream = require("fstream"),
//   tar = require("tar"),
//   zlib = require("zlib");
var zipper = require('zip-local');
// import glob from "./glob";

// export { glob };

import {
  readdirSync,
  rmdirSync,
  unlinkSync,
  readFileSync,
  statSync,
  writeFileSync,
  existsSync,
} from 'fs';
import { dirname, join, relative } from 'path';
/**
 * 编译模板并写到对应的目录下
 * @param opts { context: 模板上下文， templatePath: 模板路径，target：指定到那个目录，fileName：写成什么名字的文件}
 */
export const copyTpl = (opts: any) => {
  // console.log(opts);
  const tpl = readFileSync(opts.templatePath, 'utf-8');
  const content = Mustache.render(tpl, opts.context);
  try {
    writeFileSync(`${opts.target}/${opts.fileName}`, content, 'utf-8');
    //文件写入成功。
  } catch (err) {
    console.error(err);
  }
};

/**
 * 递归删除目录
 * @param dirName 目录路径
 */
export const removeDir = (dirName: any) => {
  let statObj = statSync(dirName); // statSync同步读取文件状态，判断是文件目录还是文件。
  if (statObj.isDirectory()) {
    //如果是目录
    let dirs = readdirSync(dirName); //readdirSync()同步的读取目标下的文件 返回一个不包括 '.' 和 '..' 的文件名的数组['b','a']
    dirs = dirs.map((dir) => join(dirName, dir)); //拼上完整的路径
    for (let i = 0; i < dirs.length; i++) {
      // 深度 先将儿子移除掉 再删除掉自己
      removeDir(dirs[i]);
    }
    rmdirSync(dirName); //删除目录
  } else {
    unlinkSync(dirName); //删除文件
  }
};

/**
 * 打包指定目录
 * @param sourceDir 要打包的目录路径
 * @param output 输出的文件及目录
 */
export const zipDir = (sourceDir: string, output: string) => {
  // zipping a file to memory without compression
  // var buff = zipper.sync.zip(sourceDir).memory();

  // zipping a directory to disk with compression
  // the directory has the following structure
  // |-- hello-world.txt
  // |-- cpp
  //     |-- hello-world.cpp
  // |-- java
  //     |--hello-world.java
  zipper.sync.zip(sourceDir).compress().save(output);
};
