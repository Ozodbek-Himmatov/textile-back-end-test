const fs = require('fs');
const path = require('path');

function makeFiles(folderName: string, name: string, props: object) {
  // ALL FUNCTIONS
  let mkDir = path.resolve(__dirname, '..', folderName);
  let readFromExample = (name: string) => {
    return fs
      .readFileSync(path.resolve(__dirname, 'example', name), 'utf8')
      .toString();
  };
  let replaceName = (content: string) => {
    let splitContent = content.split('\n');
    for (let i in splitContent) {
      if (splitContent[i].includes('from')) {
        splitContent[i] = splitContent[i].replace(
          /example./g,
          folderName + '.',
        );
      }
    }
    content = splitContent.join('\n');
    content = content
      .replace(/@Controller('example')/, `@Controller('${name}')`)
      .replace(/example/g, name[0].toLowerCase() + name.slice(1, name.length))
      .replace(/Example/g, name);
    return content;
  };

  let writeProps = (content: string) => {
    let propsArea: string = '';
    for (let i in props) {
      propsArea += `@Prop(${props[i][1]})\n\t${i}:${props[i][0]};\n\n\t`;
    }

    return content.replace(/'props'/, propsArea);
  };

  let writeCreateDto = (content: string) => {
    let str = '';
    for (let i in props) {
      str += `@ApiProperty({ example: "${props[i][2]}" })\n\t${i}: ${
        props[i][0].length > 10 ? 'number' : props[i][0]
      };\n\n\t`;
    }
    return content.replace(/'dto'/, str);
  };

  let writeUpdateDto = (content: string) => {
    let str = '';
    for (let i in props) {
      str += `@ApiProperty({ example: "${props[i][2]}" })\n\t${i}?: ${
        props[i][0].length > 10 ? 'number' : props[i][0]
      };\n\n\t`;
    }
    return content.replace(/'dto'/, str);
  };

  // FUNCTIONS END

  try {
    fs.mkdirSync(mkDir);
  } catch (error) {
    console.log('Folder is already created.');
  }
  let controller = readFromExample('example.controller.ts');
  let module = readFromExample('example.module.ts');
  let service = readFromExample('example.service.ts');
  let schema = readFromExample('schemas/example.schema.ts');
  let createDtoFile = readFromExample('dto/create-example.dto.ts');
  let updateDtoFile = readFromExample('dto/update-example.dto.ts');

  // CREATE CONTROLLER FILE
  try {
    fs.writeFileSync(
      mkDir + `/${folderName}.controller.ts`,
      replaceName(controller),
    );
    console.log('Controller created');
  } catch (error) {
    console.log('Error while creating Controller');
  }

  // CREATE SERVICE FILE
  try {
    fs.writeFileSync(mkDir + `/${folderName}.service.ts`, replaceName(service));
    console.log('Service created');
  } catch (error) {
    console.log('Error while writing Service');
  }

  // CREATE MODULE FILE
  try {
    fs.writeFileSync(mkDir + `/${folderName}.module.ts`, replaceName(module));
    console.log('Module created');
  } catch (error) {
    console.log('Error while writing Module');
  }

  // CREATE SCHEMA
  try {
    try {
      fs.mkdirSync(mkDir + '/schemas');
      console.log('Schema created');
    } catch (error) {
      console.log('The Schema folder already exists');
    }
    fs.writeFileSync(
      mkDir + `/schemas/${folderName}.schema.ts`,
      writeProps(replaceName(schema)),
    );
    console.log('Schema created');
  } catch (error) {
    console.log('Error while writing Schema');
  }

  // CREATE DTO FOLDER
  try {
    fs.mkdirSync(mkDir + '/dto');
    console.log('Dto created');
  } catch (error) {
    console.log('THe Dto folder already exists');
  }

  // CREATE CREATE DTO FILE
  try {
    fs.writeFileSync(
      mkDir + `/dto/create-${folderName}.dto.ts`,
      writeCreateDto(replaceName(createDtoFile)),
    );
    console.log('CreateDto created');
  } catch (error) {
    console.log('Error while writing CreateDto');
  }

  // CREATE UPDATE DTO FILE
  try {
    fs.writeFileSync(
      mkDir + `/dto/update-${folderName}.dto.ts`,
      writeUpdateDto(replaceName(updateDtoFile)),
    );
    console.log('UpdateDto created');
  } catch (error) {
    console.log('Error while writing UpdateDto');
  }
}

// PRODUCTS
makeFiles('products', 'Products', {
  name: ['string', '', 'suit'],
  raw_materials_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'RawMaterials'  }]",
    '',
  ],
  worth: ['number', '', '30.07'],
  currency: ['string', '', 'United States Dollar'],
});

// EMPLOYERS
makeFiles('employers', 'Employers', {
  first_name: ['string', '', 'Ozodbek Khimmatov'],
  login: ['string', '', '123'],
  password: ['string', '', '123'],
  token: ['string', '', ''],
  is_active: ['boolean', '', 'true'],
  is_owner: ['boolean', '', 'false'],
});

// EMPLOYEES
makeFiles('employees', 'Employees', {
  full_name: ['string', '', 'Ozodbek Khimmatov'],
  image: ['string', '', 'https://picsum.photos/1001/1000'],
  is_active: ['boolean', '', 'false'],
  phone: ['string', '', '887038006'],
  email: ['string', '', 'email@gmail.com'],
  login: ['string', '', '123login'],
  password: ['string', '', '123password'],
  token: ['string', '', ''],
});

// PRODUCTS OF EMPLOYEES
makeFiles('employees_products', 'EmployeesProducts', {
  employee_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Employees'  }]",
    '',
  ],
  product_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Employees'  }]",
    '',
  ],
  start_year: ['string', '', '2005'],
});

// RAW MATERIALS
makeFiles('raw_materials', 'RawMaterials', {
  name: ['string', '', 'button'],
  color: ['string', '', 'white'],
  type_of_cloth: ['string', '', 'cotton'],
  worth: ['number', '', '1000.23'],
  currency: ['string', '', 'dollar'],
});

// ACCOUNTING
makeFiles('accounting', 'Accounting', {
  product_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Products'  }]",
    '',
  ],
  quantity: ['number', '', '0'],
});

// EMPLOYEE ATTENDANCE
makeFiles('employee_attendance', 'EmployeeAttendance', {
  employee_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Employees'  }]",
    '',
  ],
  entrance_time_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Employees'  }]",
    '',
  ],
  exit_time_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Employees'  }]",
    '',
  ],
  date: ['Date', '', '12.12.2023'],
});

// ENTRANCES
makeFiles('entrance', 'Entrance', {
  entrance_time: ['Date', '', ''],
});

// EXITS
makeFiles('exits', 'Exits', {
  exits_time: ['Date', '', ''],
});
