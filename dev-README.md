# genconfig

生成项目配置文件

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/genconfig.svg)](https://npmjs.org/package/genconfig)
[![Downloads/week](https://img.shields.io/npm/dw/genconfig.svg)](https://npmjs.org/package/genconfig)
[![License](https://img.shields.io/npm/l/genconfig.svg)](https://github.com/kevinlvhsl/genconfig/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g genconfig
$ genconfig COMMAND
running command...
$ genconfig (-v|--version|version)
genconfig/0.0.1 darwin-x64 node-v12.16.1
$ genconfig --help [COMMAND]
USAGE
  $ genconfig COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`genconfig hello [FILE]`](#genconfig-hello-file)
- [`genconfig help [COMMAND]`](#genconfig-help-command)

## `genconfig hello [FILE]`

describe the command here

```
USAGE
  $ genconfig hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ genconfig hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/kevinlvhsl/genconfig/blob/v0.0.1/src/commands/hello.ts)_

## `genconfig help [COMMAND]`

display help for genconfig

```
USAGE
  $ genconfig help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

<!-- commandsstop -->
