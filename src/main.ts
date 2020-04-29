import { ValidatorBuilder } from './builder/validator.builder';

interface IData {
  date: Date;
  value: string;
}

function about() {
  console.log('task #4');
  console.log('Ametov Pavel');
  console.log('8-T3O-402B-16\n');
}

function main() {
  about();

  try {
    const data: IData = {
      date: new Date(1997),
      value: '5235',
    };

    const builder = new ValidatorBuilder<IData>();
    builder.addRule((data: IData) => data.date, (date: Date) => date >= new Date(1998));
    builder.addRule((data: IData) => data.value, (value: string) => value.length >= 5);
    const validator = builder.getValidator();

    validator.validate(data);
  } catch (e) {
    console.error(e.message);
  }
}

main();
