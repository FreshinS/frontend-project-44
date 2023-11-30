#!/usr/bin/env node


//Импорты
import readlineSync from 'readline-sync';
import { welcome } from '../src/cli.js';

//Настройка игры
const n = 3; //Кол-во правильных ответов подряд
const randMax = 100; //Максимальное случайное число

const brain_even = (n, name) => {
    let correct_count = 0;
    let number = 0;
    let answer = '';
    let correct_answer;
    while (correct_count < n) {
        number = Math.round(Math.random() * randMax + 1); 
        correct_answer = number % 2 === 0 ? 'yes' : 'no';
        console.log(`Question: ${number}`);
        answer = readlineSync.question('Your answer: ');
        if (answer === correct_answer) {
            correct_count += 1;
            console.log('Correct!');
        } else {
            correct_count = 0;
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct_answer}'.`);
        }
    }
    console.log(`Congratulations, ${name}!`);
}

const name = welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
brain_even(n, name);