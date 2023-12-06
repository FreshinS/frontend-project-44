import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const getRandomInt = (max) => Math.floor(Math.random() * (max + 1));

export const brainGameStart = (n, name, gameName) => {
  console.log('Find the greatest common divisor of given numbers.');
  let correctCount = 0;
  while (correctCount < n) {
    if (gameName(name) === 1) correctCount += 1;
    else return 0;
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};
