const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name?: ', (answer) => {
  let answers = [];
  answers.push(answer);
  rl.resume();

  rl.question('Whats is your hobby?: ', (answer) => {
    answers.push(answer);
    rl.resume();

    rl.question('What are you listening to?: ', (answer) => {
      answers.push(answer);
      rl.resume();

      rl.question('Which meal do you prefer? (eg: dinner, brunch, dinner, etc.): ', (answer) => {
        answers.push(answer);
        rl.resume();

        rl.question('Whats your favorite thing to eat?: ', (answer) => {
          answers.push(answer);
          rl.resume();

          rl.question('Whats is your favorite sport?: ', (answer) => {
            answers.push(answer);
            rl.resume();

            rl.question('Whats is your favorite video game?: ', (answer) => {
              answers.push(answer);
              console.log(`My name is ${answers[0]}. One of my hobbies is ${answers[1]}. Currently, i'm listening to ${answers[2]}. I prefer to eat at ${answers[3]}, and my favorite thing to eat is ${answers[4]}. I love ${answers[5]} and the best game ever made is ${answers[6]}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
