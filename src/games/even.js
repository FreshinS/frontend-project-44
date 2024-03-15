// Импорты
import { getRandomInt } from '../cli.js';
import { answerCheck, getAnswer } from '../index.js';

// Настройка игры
export const str = 'Answer "yes" if the number is even, otherwise answer "no".';
export const a = 3; // Кол-во правильных ответов подряд
const randMax = 100; // Максимальное случайное число

export const brainEven = (name) => {
  const number = getRandomInt(0, randMax);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const question = `${number}`;
  const answer = getAnswer(question);
  return answerCheck(answer, correctAnswer, name);
};