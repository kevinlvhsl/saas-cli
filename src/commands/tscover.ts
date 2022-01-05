/*
 * @Description: 查看指定目录下ts覆盖率（仅统计js和ts比例）
 * @Autor: kevin.liang
 * @Date: 2021-12-08 11:18:47
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-01-05 16:51:06
 */
import { Command, flags } from '@oclif/command';
const { join, resolve } = require('path');
const parserLib = require('@oclif/parser/lib/errors');
// var glob = require("glob");
const glob = require('../utils/glob.js');

export default class GenConfig extends Command {
  static description = 'describe the command here';

  static examples = [`$ saas tscover -d <指定目录> -t 是否递归`];

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    dir: flags.string({
      char: 'd',
      description: '指定目录',
      required: true,
    }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    try {
      const { args, flags } = this.parse(GenConfig);
      const jsFiles = glob.sync(join(process.cwd(), flags.dir, '/**/*.js'));
      const tsFiles = glob.sync(join(process.cwd(), flags.dir, '/**/*.ts'));
      console.log('ts文件：', tsFiles.length, 'js文件：', jsFiles.length);
      console.log(
        'ts覆盖率：',
        ((tsFiles.length / (jsFiles.length + tsFiles.length)) * 100).toFixed(2),
        '%'
      );
    } catch (err) {
      if (err instanceof parserLib.RequiredFlagError) {
        console.log('缺少参数：', err.message);
      }
    }
  }
}
