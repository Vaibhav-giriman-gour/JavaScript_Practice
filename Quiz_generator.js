function main() {
    const questions = [
      "Question1",
      "Question2",
      "Question3",
      "Question4",
      "Question5"
    ];
    function shuffle(arr) {
      return function () {
        const result = [...arr];
        //Write your code below
        for(let i = result.length - 1; i>0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [result[i], result[j]] = [result[j], result[i]] 
        }

        return result;
      };
    }
    const outputShuffle = shuffle(questions);

    const shuffle1 = outputShuffle();
    const shuffle2 = outputShuffle();

    console.log("First shuffled output:", shuffle1);
    console.log("Second shuffled output:", shuffle2);

  }
  main();