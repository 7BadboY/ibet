/* eslint-disable no-unused-vars */
const massNames = [
  'Else',
  'Lola',
  'Celsa',
  'Demetrius',
  'Orlando',
  'Sherril',
  'Marline',
  'Elnora',
  'Willy',
  'Shirl',
  'Kanesha',
  'Trudie',
  'Verna',
  'Nicole',
  'Shante',
  'Keva',
  'Modesto',
  'Arlena',
  'Maude',
  'Lillie',
  'Madelyn',
  'Takisha',
  'Taneka',
  'Forest',
  'Denisha',
  'Lizabeth',
  'Leon',
  'Fritz',
  'Clifford',
  'Rita',
  'Annice',
  'Leonor',
  'Sena',
  'Tamela',
  'Pamala',
  'Leena',
  'Galina',
  'Suanne',
  'Blossom',
  'Dong',
  'Reanna',
  'Treasa',
  'Joie',
  'Jeanette',
  'Angelica',
  'Francisca',
  'Taunya',
  'Eleonore',
  'Annamae',
  'Marissa',
  'Annemarie',
  'Deandre',
  'Suzette',
  'Fannie',
  'Ailene',
  'Angelyn',
  'Tomika',
  'Cinderella',
  'Ngoc',
  'Charmain',
  'Marianna',
  'Despina',
  'Lura',
  'Misti',
  'Elnora',
  'Jong',
  'Hermila',
  'Christal',
  'Shaquana',
  'Larita',
  'Diedre',
  'Winston',
  'Helaine',
  'Jeannetta',
  'Ollie',
  'Gregorio',
  'Maribeth',
  'Bula',
  'Leota',
  'Ardelle',
  'Clarinda',
  'Augustina',
  'Annice',
  'Soon',
  'Francisco',
  'Carisa',
  'Machelle',
  'Shannan',
  'Raymon',
  'Gearldine',
  'Delcie',
  'Erich',
  'Sharon',
  'Errol',
  'Long',
  'Malka',
  'Staci',
];
let prevUser;

const randomOfMass = () => {
  let newMass = massNames.sort((a, b) => Math.random() - 0.5);
  if (prevUser === newMass[0]) {
    console.log(`Совпадение`);

    newMass = massNames.sort((a, b) => Math.random() - 0.5);
  }
  const name = newMass[0];
  prevUser = name;
  return newMass[0];
};

export default randomOfMass;