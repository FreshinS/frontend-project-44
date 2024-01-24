#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';
import { welcome, getRandomInt } from '../src/cli.js';
import { brainGameStart, loseGame } from '../src/index.js';

// Настройка игры
const c = 3; // Кол-во правильных ответов подряд
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

const brainGCD = (name) => {
  const [number1, number2] = [getRandomInt(0, randMax), getRandomInt(0, randMax)];
  const correctAnswer = findGCD(number1, number2);
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  if (parseInt(answer, 10) === correctAnswer) {
    return 1;
  }
  loseGame(correctAnswer, answer, name);
  return 0;
};

const gameName = brainGCD;

const name = welcome();
console.log('Find the greatest common divisor of given numbers.');
brainGameStart(c, name, gameName);
