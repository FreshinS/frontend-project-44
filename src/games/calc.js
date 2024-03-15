import readlineSync from 'readline-sync';
import { getRandomInt } from '../cli.js';
import { answerCheck } from '../index.js';


// Настройка игры
const randMax = 25; // Максимальное случайное число
export const str = 'What is the result of the expression?';
export const a = 3; // Кол-во правильных ответов подряд

const operations = ['+', '-', '*'];

export const brainCalc = (name) => {
  const [number1, number2] = [getRandomInt(0, randMax), getRandomInt(0, randMax)];
  const operation = getRandomInt(0, 2);
  let correctAnswer;
  switch (operation) {
    case 0:
      correctAnswer = number1 + number2;
      break;
    case 1:
      correctAnswer = number1 - number2;
      break;
    case 2:
      correctAnswer = number1 * number2;
      break;
    default:
      return 0;
  }
  console.log(`Question: ${number1} ${operations[operation]} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  return answerCheck(answer, correctAnswer, name);
};