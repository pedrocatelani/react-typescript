import { ObjectProps } from './types';

const object: ObjectProps = {
  male: 'Masculino', //value: Label para o select.
  female: 'Feminino',
  another: 'Outro',
};

//object = [[key,value],[k,v],[k,v]]
//objectArray =[{key:value},{k:v},{k:v}]
const objectArray = Object.entries(object).map((item) => {
  let subObject = {
    value: item[0],
    label: item[1],
  };
  return subObject;
});

console.log(objectArray)

export {objectArray};
