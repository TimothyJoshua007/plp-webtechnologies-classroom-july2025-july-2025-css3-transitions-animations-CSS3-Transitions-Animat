// ---------------------------
// PART 2: Functions
// ---------------------------

// Global variable
let globalMultiplier = 2;

// Function with parameter + return value
function multiply(num, factor) {
  // Local variable
  let result = num * factor;
  return result;
}

function doubleNumber() {
  let input = document.getElementById("numInput").value;
  if (input === "") {
    document.getElementById("result").innerText = "Please enter a number";
    return;
  }

  // Using global + local scope
  let doubled = multiply(Number(input), globalMultiplier);
  document.getElementById("result").innerText = `Result: ${doubled}`;
}

// ---------------------------
// PART 3: CSS + JS COMBINED
// ---------------------------
function triggerAnimation() {
  let box = document.getElementById("box");

  // Add class to trigger CSS keyframe animation
  box.classList.add("animate");

  // Remove the class after animation ends (so it can replay)
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  });
}
