// function checkAnswer() {
//     // Function body
//     const correctAnswer = "4";
//     const userAnswer = document.querySelector('input[name="quiz"]:checked')
//     if(userAnswer == correctAnswer){
//         feedback.textContent = "Correct! Well done.";
//     }else {
//         feedback.textContent = "That's incorrect. Try again!";
// }else {
//     alert("Please select an answer.");
//   }
// }

// // Add event listener to the submit button
// document.getElementById("submit-answer").addEventListener("click", checkAnswer);

function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";
  
    // Use document.querySelector to select the checked radio button by its name attribute
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
  
    // Check if an answer was selected
    if (selectedOption) {
      // Access the value property of the selected radio button
      const userAnswer = selectedOption.value;
  
      // Compare the user's answer with the correct answer
      const feedback = document.getElementById("feedback");
      if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
      } else {
        feedback.textContent = "That's incorrect. Try again!";
      }
    } else {
      alert("Please select an answer.");
    }
  }
  
  // Add event listener to the submit button
  document.getElementById("submit-answer").addEventListener("click", checkAnswer);