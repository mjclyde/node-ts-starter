import * as inquirer from 'inquirer';

inquirer.prompt([
  {
    type: 'list',
    name: 'test',
    message: 'Hello there, welcome to the Node + Typescript Starter',
    choices: ['Lets Do This', 'Exit'],
  },
]).then((result) => {
  console.log(result);
});
