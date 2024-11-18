const names = [
  'George',
  'Paul',
  'Ringo',
  'John',
  'Eric',
  'Billy',
  'Elvis',
  'Phil',
  ``,
];

const getNamePart = () => names[Math.floor(Math.random() * names.length)];
const getRandomName = () => `${getNamePart()} ${getNamePart()}`;

export default getRandomName;
