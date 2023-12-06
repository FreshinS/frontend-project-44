#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';
import { welcome, getRandomInt, brainGameStart } from '../src/cli.js';

// Настройка игры
const a = 3; // Кол-во правильных ответов подряд
const randMax = 100; // Максимальное случайное число

const brainEven = (name) => {
  const number = getRandomInt(0, randMax);
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

const gameName = brainEven;

const name = welcome();
brainGameStart(a, name, gameName);
