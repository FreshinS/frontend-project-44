// Импорты
import { getRandomInt } from '../cli.js';
import { answerCheck, getAnswer } from '../index.js';

// Настройка игры
export const str = 'Find the greatest common divisor of given numbers.';
export const c = 3; // Кол-во правильных ответов подряд
const randMax = 100; // Максимальное случайное число

const findGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  return a + b;
};

export const brainGCD = (name) => {
  const [number1, number2] = [getRandomInt(0, randMax), getRandomInt(0, randMax)];
  const correctAnswer = findGCD(number1, number2);
  const question = `${number1} ${number2}`;
  const answer = getAnswer(question);
  return answerCheck(answer, correctAnswer, name);
};
