#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';
import { welcome, getRandomInt } from '../src/cli.js';
import { brainGameStart, loseGame } from '../src/index.js';

// Настройка игры
const a = 3; // Кол-во правильных ответов подряд
const randMax = 100;

const checkPrime = (n) => {
  let isPrime = true;
  let i = 2;
  while (i <= Math.sqrt(n) && isPrime === true) {
    if (n % i === 0) {
      isPrime = false;
    }
    i += 1;
  }
  return isPrime ? 'yes' : 'no';
};

const brainPrime = (name) => {
  const number = getRandomInt(0, randMax);
  let correctAnswer = '';
  if (number === 0 || number === 1) {
    correctAnswer = 'no';
  } else {
    correctAnswer = checkPrime(number);
  }
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    return 1;
  }
  loseGame(correctAnswer, answer, name);
  return 0;
};

const gameName = brainPrime;

const name = welcome();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
brainGameStart(a, name, gameName);
