import { Command, flags } from '@oclif/command';
import { copyTpl, removeDir, zipDir } from '../utils';
const { join, resolve } = require('path');
const fs = require('fs');

type Terminal = 'A' | 'B' | 'C';
const PROJECTS_MAP = {
  A: ['ops-core', 'h5', 'dplatform-goods', 'dplatform-h5'],
  B: ['ops-channel'],
  C: ['h5-client'],
};

export default class GenConfig extends Command {
  static description = 'describe the command here';

  static examples = ['$ saasconfig config -n <客户名缩写> -t ABC'];

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({
      char: 'n',
      description: '客户名称缩写',
      required: true,
    }),
    terminal: flags.string({
      char: 't',
      description: '部署的端，A/B/C三端可选',
      options: ['A', 'AB', 'ABC'],
    }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    try {
      const { args, flags } = this.parse(GenConfig);
      console.log('输入参数', flags);
      const currDir = join(process.cwd(), flags.name);
      if (fs.existsSync(currDir)) {
        // 存在则先删除，后创建
        removeDir(currDir);
        fs.mkdirSync(currDir);
      } else {
        fs.mkdirSync(currDir);
      }
      if (flags.terminal) {
        const list: Terminal[] = flags.terminal.split('') as Terminal[];
        list.forEach((t: Terminal) => {
          const files = PROJECTS_MAP[t];
          files.forEach((tpl) => {
            copyTpl({
              context: {
                custName: flags.name,
              },
              templatePath: join(__dirname, `../templates/${tpl}.tpl`),
              target: join(process.cwd(), `${flags.name}`),
              fileName: `${flags.name}-${tpl}.conf`,
            });
          });
        });
      }
      zipDir(currDir, `${currDir}.zip`);
      console.log(`生成完成, 文件在${resolve(process.cwd())}目录下`);
    } catch (err) {
      console.log('发生了错误', err);
    }
  }
}
