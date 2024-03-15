import { welcome } from '../src/cli.js';

/*export const answerCheck = (answer, correctAnswer, name) => {
  if (typeof correctAnswer === Number) {
    if (parseInt(answer, 10) === correctAnswer) {
      return 1;
    }
    loseGame(correctAnswer, answer, name);
    return 0;
  }
  if (answer === correctAnswer) {
    return 1;
  }
  loseGame(correctAnswer, answer, name);
  return 0;
}*/

export const answerCheck = (answer, correctAnswer, name) => {
  console.log(typeof correctAnswer);
  if ((typeof correctAnswer === 'number' ? parseInt(answer, 10) : answer) === correctAnswer) {
    return 1;
  }
  loseGame(correctAnswer, answer, name);
  return 0;
}


export const brainGameStart = (n, str, gameName) => {
  const name = welcome();
  console.log(str);
  let correctCount = 0;
  while (correctCount < n) {
    if (gameName(name) === 1) {
      console.log('Correct!');
      correctCount += 1;
    } else return 0;
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

export const loseGame = (correctAnswer, answer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};
