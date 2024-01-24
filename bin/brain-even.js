#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';
import { welcome, getRandomInt } from '../src/cli.js';
import { brainGameStart, loseGame } from '../src/index.js';

// Настройка игры
const a = 3; // Кол-во правильных ответов подряд
const randMax = 100; // Максимальное случайное число

const brainEven = (name) => {
  const number = getRandomInt(0, randMax);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    return 1;
  }
  loseGame(correctAnswer, answer, name);
  return 0;
};

const gameName = brainEven;

const name = welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
brainGameStart(a, name, gameName);
