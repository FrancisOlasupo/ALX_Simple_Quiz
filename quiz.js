function checkAnswer() {
    // Function body
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked')
    if(userAnswer == correctAnswer){
        feedback.textContent = "Correct! Well done.";
    }else {
        feedback.textContent = "That's incorrect. Try again!";
}else {
    alert("Please select an answer.");
  }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);