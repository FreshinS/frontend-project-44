#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';
import { welcome, getRandomInt } from '../src/cli.js';
import { brainGameStart, loseGame } from '../src/index.js';

// Настройка игры
const a = 3; // Кол-во правильных ответов подряд
const progressionMaxLen = 15;
const progressionMinLen = 5;
const progressionMaxStep = 10;
const progressionMaxStart = 50;

const generateProgression = (start, len, step) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(start + (i * step));
  }
  return arr;
};

const printProgression = (arr, index) => {
  let str = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (i !== index) str += `${arr[i]} `;
    else str += '.. ';
  }
  return str;
};

const brainProgression = (name) => {
  const progressionStart = getRandomInt(0, progressionMaxStart);
  const progressionStep = getRandomInt(1, progressionMaxStep);
  const progressionLen = getRandomInt(progressionMinLen, progressionMaxLen);
  const hidden = getRandomInt(0, progressionLen - 1);
  const progression = generateProgression(progressionStart, progressionLen, progressionStep);
  const correctAnswer = progression[hidden];
  console.log(`Question: ${printProgression(progression, hidden)}`);
  const answer = readlineSync.question('Your answer: ');
  if (parseInt(answer, 10) === correctAnswer) {
    return 1;
  }
  loseGame(correctAnswer, answer, name);
  return 0;
};

const gameName = brainProgression;

const name = welcome();
console.log('What number is missing in the progression?');
brainGameStart(a, name, gameName);
