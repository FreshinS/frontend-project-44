#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';
import { welcome } from '../src/cli.js';

// Настройка игры
const a = 3; // Кол-во правильных ответов подряд
const randMax = 100; // Максимальное случайное число

const brainEvenStart = (n, name) => {
  let correctCount = 0;
  
  while (correctCount < n) {
    if (brainEven(name) === 1) correctCount += 1;
    else return 0;
  }
  console.log(`Congratulations, ${name}!`);
};

const brainEven = (name) => {
    const number = Math.round(Math.random() * randMax + 1);
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

const name = welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
brainEvenStart(a, name);
