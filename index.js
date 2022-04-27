// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = (name) => cats.push(name);

const destructivelyPrependCat = (name) => cats.unshift(name);

const destructivelyRemoveLastCat = () => cats.pop();

const destructivelyRemoveFirstCat = () => cats.shift();

const appendCat = (name) => {
  const addToEnd = [...cats, 'Broom'];
  return addToEnd;
}

const prependCat = (name) => {
  const addToBeginning = ['Arnold', ...cats];
  return addToBeginning;
}

const removeLastCat = () => cats.slice(0, cats.length - 1);

const removeFirstCat = () => cats.slice(1);

