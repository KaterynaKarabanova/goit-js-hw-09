
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector("input[name='step']");
const amount = document.querySelector("input[name='amount']");
const form = document.querySelector(".form");

console.log(delay);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// function onSubmit() {
//   let currentDelay = parseInt(delay.value);
//   let currentStep = parseInt(step.value);
//   const currentAmount = parseInt(amount.value);
//   for (let i = 0; i < currentAmount; i++) {
//     createPromise(i, currentDelay)
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     currentDelay += currentStep;
//   }
// }

form.addEventListener("submit", setTimeout(()=>{
  let currentDelay = parseInt(delay.value);
  let currentStep = parseInt(step.value);
  const currentAmount = parseInt(amount.value);
  for (let i = 0; i < currentAmount; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    currentDelay += currentStep;
  }
}, 1000));
