// Импорты
import readlineSync from 'readline-sync';
import { getRandomInt } from '../cli.js';
import { answerCheck } from '../index.js';

// Настройка игры
export const str = 'Answer "yes" if the number is even, otherwise answer "no".';
export const a = 3; // Кол-во правильных ответов подряд
const randMax = 100; // Максимальное случайное число

export const brainEven = (name) => {
  const number = getRandomInt(0, randMax);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  return answerCheck(answer, correctAnswer, name)
};