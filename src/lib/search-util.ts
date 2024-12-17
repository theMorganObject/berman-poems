const numbersWithMultiplePoems = [
  '6',
  '44',
  '90',
  '94',
  '241',
  '718',
  '726',
  '735',
];

export const keypadButtons: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'Clear',
  '0',
  'Delete',
];

export const getPoemUrlString = (poemNumber: string): string => {
  let suffix = '';

  if (numbersWithMultiplePoems.includes(poemNumber)) {
    suffix = 'a';
  }

  return poemNumber.padStart(4, '0') + suffix;
};

export const isValidPoemNumber = (poemNumber: string): boolean => {
  const number = parseInt(poemNumber, 10);
  return number >= 1 && number <= 754;
};
