#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';
import { welcome, getRandomInt } from '../src/cli.js';

// Настройка игры
const a = 3; // Кол-во правильных ответов подряд
const randMax = 25; // Максимальное случайное число

const operations = ['+', '-', '*'];

const brainCalc = (name) => {
  const number1 = getRandomInt(randMax);
  const number2 = getRandomInt(randMax);
  const operation = getRandomInt(2);
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
  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return 0;
};

const brainCalcStart = (n, name) => {
  let correctCount = 0;
  console.log('What is the result of the expression?');
  while (correctCount < n) {
    if (brainCalc(name) === 1) correctCount += 1;
    else return 0;
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

const name = welcome();
brainCalcStart(a, name);
