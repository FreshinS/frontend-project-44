#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';
import { welcome } from '../src/cli.js';

// Настройка игры
const a = 3; // Кол-во правильных ответов подряд
const randMax = 100; // Максимальное случайное число

const brainEven = (n, name) => {
  let correctCount = 0;
  let number = 0;
  let answer = '';
  let correctAnswer;
  while (correctCount < n) {
    number = Math.round(Math.random() * randMax + 1);
    correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      correctCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const name = welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
brainEven(a, name);
