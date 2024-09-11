#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const commander = require('commander');
const inquirer = require('inquirer');
/*
  @dest: 使用配置文件
 */
const projectList = [
  {
    type: 'list',
    message: '请选择拉取的模版类型:',
    name: 'type',
    choices: [
      {
        name: 'react-web 中后台开发模版',
        value: {
          local: './template/react-web',
          val: '中后台开发模版',
        },
      },
      {
        name: 'react-docs 组件库开发模版',
        value: {
          local: './template/react-docs',
          val: '组件库开发模版',
        },
      },
    ],
  },
];

commander.command('new <projectName>').action(async (projectName) => {
  const dir = path.join(process.cwd(), projectName);
  // 检测创建项目文件夹是否存在
  if (fs.existsSync(dir)) {
    console.log(chalk.red(`创建${projectName}项目失败，名称已存在!`));
    process.exit(1);
  }
  inquirer.prompt(projectList).then(async (result) => {
    const { local, val } = result.type;
    if (!local) {
      console.log(chalk.red(`${val} 该类型暂不支持...`));
      process.exit(1);
    }
    // 拷贝项目到制定路径
    const localPath = path.join(process.cwd(), projectName);
    fs.copySync(path.resolve(__dirname, local), localPath);
    /** rename */
    fs.rename(`${localPath}/.npmrc.md`, `${localPath}/.npmrc`);
    fs.rename(`${localPath}/.gitignore.md`, `${localPath}/.gitignore`);
    const exists = await fs.pathExists(`${localPath}/.npmignore.md`);
    if (exists) {
      fs.rename(`${localPath}/.npmignore.md`, `${localPath}/.npmignore`);
    }
    console.log(chalk.green(`${projectName} 项目模版创建成功`));
  });
});

commander.parse(process.argv);
