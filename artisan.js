const inquirer = require("inquirer");
const fs = require('fs');

const createFile = (filepath,fileContent) => {

  return fs.writeFileSync(filepath,fileContent,(error) => {

    if(error){
      return `An error occured: ${error}`;
    }else{
      return 'Your file is created';
    }
  })
}

const modelBoilerPlate = name => {
  return `const Model = require('./Model');

class ${name} extends Model {

    constructor(){
        super();
    }
}

module.exports = new ${name};`
}

const controllerBoilerPlate = name => {
  return `const Controller = use("app/Controllers/Controller");

class ${name} extends Controller {
  
}

module.exports = new ${name};`;
}

const controllerBoilerPlateWithModel = (controllerName,modelName) => {
  return `const Controller = use("app/Controllers/Controller");
const ${modelName} = use("app/Models/${modelName}");

class ${controllerName} extends Controller {
  
}

module.exports = new ${controllerName};`;
}
const controllerBoilerPlateWithModelAndResource = (controllerName,modelName) => {
  return `const Controller = use("app/Controllers/Controller");
const ${modelName} = use("app/Models/${modelName}");

class ${controllerName} extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return Json Response
     */
    async index(request,response){

    }
    /**
     * Display the specified resource.
     *
     * @param  request
     * @param  response
     * @return Json Response
     */
    async show(request,response){

    }
    /**
     * Update the specified resource in storage.
     *
     * @param  request
     * @param  response
     * @return Json Response
     */
    async update(request,response){

    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  request
     * @param  response
     * @return Json Response
     */
    async delete(request,response){

    }
}

 module.exports = new ${controllerName};`;
}


inquirer
  .prompt([
    {
      type: "list",
      name: "artisan",
      message: "Select option",
      choices: ["Model", "Controller"]
    }
  ])
  .then((answers) => { 

    switch(answers.artisan) {
      case 'Model':
        inquirer.prompt([
          
          {
            type: "input",
            name: "name",
            message: "Enter model name",
          },
        ]).then(async ans => {
            await createModel(ans.name);
        });
        break;
      case 'Controller':
        inquirer.prompt([
          
          {
            type: "input",
            name: "name",
            message: "Enter controller name",
          },
        ]).then(async ans => {

            await createFile(`./app/Controllers/${ans.name}.js`,controllerBoilerPlate(ans.name))

        })
        break;
      default:
        // code block
    }
  });


 const createModel = async answer => {

    const options = answer.split("--");
    let modelName = options[0].replace(/\s+/g, '');

    if(options.length === 2){

      let controllerName = options[0].concat("Controller").replace(/\s+/g, '');

      switch(options[1]){
        case 'm':

          await createFile(`./app/Models/${modelName}.js`,modelBoilerPlate(modelName));
          console.log(`${modelName} Model is created`);
        break;
        case 'c':
          
          await createFile(`./app/Models/${modelName}.js`,modelBoilerPlate(modelName));
          await createFile(`./app/Controllers/${controllerName}.js`,controllerBoilerPlateWithModel(controllerName,modelName));

          console.log(`${modelName} Model is created`);
          console.log(`${controllerName} Controller is created`);

        break;
        case 'mcr':
      
          await createFile(`./app/Models/${modelName}.js`,modelBoilerPlate(modelName));
          await createFile(`./app/Controllers/${controllerName}.js`,controllerBoilerPlateWithModelAndResource(controllerName,modelName));
          console.log(`${modelName} Model is created`);
          console.log(`${controllerName} Controller is created`);
        break;
        default:
      }
    }else{

      await createFile(`./app/Models/${modelName}.js`,modelBoilerPlate(modelName));
       console.log(`${modelName} Model is created`);
    }
  }


