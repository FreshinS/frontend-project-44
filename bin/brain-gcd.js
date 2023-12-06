#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';
import { welcome, getRandomInt, brainGameStart } from '../src/cli.js';

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
  const [number1, number2] = [getRandomInt(randMax), getRandomInt(randMax)];
  const correctAnswer = findGCD(number1, number2);
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return 0;
};

const gameName = brainGCD;

const name = welcome();
brainGameStart(c, name, gameName);
