function subtract(name) {
  const el = document.getElementById(name);
  el.value = el.value <= 1 ? 1 : parseInt(el.value) - 1;
}

function addition(name) {
  const el = document.getElementById(name);
  el.value = parseInt(el.value) + 1;
}

let currentStep = 1;
const stepTitles = ["Your booking", "Your details", "Your payment"];

const continueBtn = document.getElementById("continue-btn");

document.getElementById("continue-btn").onclick = () => {
  currentStep++;
  const lastCard = document.getElementById(`step${currentStep - 1}`);
  const currentCard = document.getElementById(`step${currentStep}`);
  const stepTitle = document.getElementById("step-title");
  const barStep = document.getElementById(`bar-step${currentStep - 1}`);
  const backCol = document.getElementById("back-col");

  barStep.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  barStep.className = "col active";

  if (lastCard) lastCard.className = "card hidden";
  currentCard.className = "card";

  stepTitle.innerHTML = stepTitles[currentStep - 1];

  if (currentStep != 1) backCol.className = "col";
  if (currentStep == 3) continueBtn.innerHTML = "Payment";

  $("html,body").scrollTop(0);
};

document.getElementById("back-btn").onclick = () => {
  currentStep--;
  const lastCard = document.getElementById(`step${currentStep + 1}`);
  const currentCard = document.getElementById(`step${currentStep}`);
  const stepTitle = document.getElementById("step-title");
  const barStep = document.getElementById(`bar-step${currentStep}`);
  const backCol = document.getElementById("back-col");

  barStep.innerHTML = `${stepTitles[currentStep - 1]} <span>${currentStep}</span>`;
  barStep.className = "col step";

  if (lastCard) lastCard.className = "card hidden";
  currentCard.className = "card";
  if (currentStep == 1) backCol.className = "col hidden";
  if (currentStep != 3) continueBtn.innerHTML = "Continue";

  stepTitle.innerHTML = stepTitles[currentStep - 1];
  $("html,body").scrollTop(0);
};
