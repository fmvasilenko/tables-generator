const letters = ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

const getRandomLetter = () => {
  const randomNum = Math.floor(Math.random() * (letters.length));
  return letters[randomNum];
}

const isLetterUsed = (letter, index, tables) => {
  for (const table of tables) {
    if (table[index] === letter) {
      return true;
    }
  }

  return false;
}

export const generateEmptyTables = (size, numberOfTables) => {
  const tables = [];

  for(let i = 0; i < numberOfTables; i++) {
    const newTable = [];
    tables.push(newTable);

    for (let j = 0; j < size; j++) {
      let newLetter = getRandomLetter();

      while (isLetterUsed(newLetter, j, tables)) {
        newLetter = getRandomLetter();
      }

      newTable.push(newLetter);
    }
  }

  return tables;
}

export const createEmptyArray = (size, numberOfTables) => {
  const tables = [];

  for (let i = 0; i < numberOfTables; i++) {
    tables.push(new Array(size).fill(''));
  }

  return tables;
}

export const fillUpTables = (tables) => {
  console.log('here');
  tables.forEach((table) => {
    table.forEach((letter, index) => {
      if (letter) return;

      console.log('here');

      while (isLetterUsed(letter, index, tables)) {
        letter = getRandomLetter();
      }

      table[index] = letter;
    });
  })
}
