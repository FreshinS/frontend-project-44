#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';
import { welcome, getRandomInt } from '../src/cli.js';
import { brainGameStart, loseGame } from '../src/index.js';

// Настройка игры
const a = 3; // Кол-во правильных ответов подряд
const randMax = 25; // Максимальное случайное число

const operations = ['+', '-', '*'];

const brainCalc = (name) => {
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
  if (parseInt(answer, 10) === correctAnswer) {
    return 1;
  }
  loseGame(correctAnswer, answer, name);
  return 0;
};

const gameName = brainCalc;

const name = welcome();
console.log('What is the result of the expression?');
brainGameStart(a, name, gameName);
