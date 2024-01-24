export const brainGameStart = (n, name, gameName) => {
    let correctCount = 0;
    while (correctCount < n) {
      if (gameName(name) === 1) {
        console.log('Correct!');
        correctCount += 1;
      }
      else return 0;
    }
    console.log(`Congratulations, ${name}!`);
    return 0;
  };

  export const loseGame = (correctAnswer, answer, name) => {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }