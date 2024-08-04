// Get references to the HTML elements
let newAdviceButton = document.querySelector('.newAdviceButton');
let adviceID = document.querySelector('.adviceID');
let advice = document.querySelector('.advice');

// Function to fetch advice from the API
async function fetchAdvice() {
  // Generate a random number between 1 and 223
  let number = Math.ceil(Math.random() * 223);
  
  // Display a loading message while fetching the new advice
  advice.textContent = "Loading New Advice...";
  
  // Fetch advice from the API using the random number
  let response = await fetch(`https://api.adviceslip.com/advice/${number}`);
  
  // Convert the response to JSON format
  let data = await response.json();
  
  // Return the advice slip from the fetched data
  return data.slip;
}

// Function to insert the new advice into the HTML elements
async function insertNewAdvice() {
  // Fetch the advice
  let adviceInfo = await fetchAdvice();
  
  // Log the advice to the console (for debugging)
  console.log(adviceInfo);
  
  // Update the HTML elements with the new advice
  adviceID.textContent = adviceInfo.id;
  advice.textContent = adviceInfo.advice;
}

// Add an event listener to the button to trigger the insertNewAdvice function when clicked
newAdviceButton.addEventListener('click', insertNewAdvice);
