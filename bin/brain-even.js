#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';
import { welcome, getRandomInt } from '../src/cli.js';

// Настройка игры
const a = 3; // Кол-во правильных ответов подряд
const randMax = 100; // Максимальное случайное число

const brainEven = (name) => {
  const number = getRandomInt(randMax);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
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

const brainEvenStart = (n, name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctCount = 0;
  while (correctCount < n) {
    if (brainEven(name) === 1) correctCount += 1;
    else return 0;
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

const name = welcome();
brainEvenStart(a, name);
