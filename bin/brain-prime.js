#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';
import { welcome, getRandomInt, brainGameStart } from '../src/cli.js';

// Настройка игры
const a = 3; // Кол-во правильных ответов подряд
const randMax = 100;

const checkPrime = (n) => {
  if (n === 0 || n === 1) return 'no';
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
  const correctAnswer = checkPrime(number);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return 0;
};

const gameName = brainPrime;

const name = welcome();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
brainGameStart(a, name, gameName);
