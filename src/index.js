import readlineSync from 'readline-sync';
import { welcome } from './cli.js';

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

export const brainGameStart = (n, str, gameName) => {
  const name = welcome();
  let correctCount = 0;
  console.log(str);
  while (correctCount < n) {
    if (gameName(name) === 1) {
      console.log('Correct!');
      correctCount += 1;
    } else return 0;
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

export const loseGame = (correctAnswer, answer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const answerCheck = (answer, correctAnswer, name) => {
  if ((typeof correctAnswer === 'number' ? parseInt(answer, 10) : answer) === correctAnswer) {
    return 1;
  }
  loseGame(correctAnswer, answer, name);
  return 0;
};
