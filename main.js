/*Introduction
What is the primary difference between synchronous and asynchronous programming in JavaScript?
Synchronous programming is when the program runs line by line and is able to run each line
without waiting for the line before it to finish
Asynchronous programming is when the program has pieces of code that take a long time to run,
such as calls to an API, and the program needs to wait for the call to finish before
it can move to the next line. To circumvent this, an event handler can be attached to the call,
so that the program can continue execution and when the call resolves, the event handler will fire
and return the result of the call.
Why is this useful?
This is useful when you have a program that is making calls to an API, because the program must run
asynchronously to allow time for that call to resolve.
What problems does it solve?
This way the program can continue execution without having to wait for all of the asynchronous parts
of the program to resolve
*/

// ------ Promises ------

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
// });

// ------ Promise Chaining ------

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].name);
//   });

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   });

// ------ Error handling ------

// const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .catch((error) => {
//     console.error(`Could not get products: ${error}`);
//   });

// ------ Combining multiple promises ------

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`)
//   });

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then((responses) => {
//         for (const response of responses) {
//             console.log(`${response.url}: ${response.status}`);
//         }
//     })
//     .catch((error) => {
//         console.error(`Failed to fetch: ${error}`)
//     });

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((response) => {
//     console.log(`${response.url}: ${response.status}`);
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`)
//   });

// ------ Async await ------

// async function fetchProducts() {
//     try {
//         // after this line, our function will wait for the `fetch()` call to be settled
//         // the `fetch()` call will either return a Response or throw an error
//         const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         // after this line, our function will wait for the `response.json()` call to be settled
//         // the `response.json()` call will either return the parsed JSON object or throw an error
//         const data = await response.json();
//         console.log(data[0].name);
//     }
//     catch (error) {
//         console.error(`Could not get products: ${error}`);
//     }
// }

// fetchProducts();

// async function fetchProducts() {
//     try {
//       const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
//       const data = await response.json();
//       return data;
//     }
//     catch (error) {
//       console.error(`Could not get products: ${error}`);
//     }
//   }

//   const promise = fetchProducts();
//   promise.then((data) => console.log(data[0].name));

// ------ Promise based API ------

// function alarm(person, delay) {
//     return new Promise((resolve, reject) => {
//       if (delay < 0) {
//         throw new Error('Alarm delay must not be negative');
//       }
//       setTimeout(() => {
//         resolve(`Wake up, ${person}!`);
//       }, delay);
//     });
//   }

// const name = document.querySelector('#name');
// const delay = document.querySelector('#delay');
// const button = document.querySelector('#set-alarm');
// const output = document.querySelector('#output');

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error('Alarm delay must not be negative');
//     }
//     setTimeout(() => {
//       resolve(`Wake up, ${person}!`);
//     }, delay);
//   });
// }

// button.addEventListener('click', async () => {
//   try {
//     const message = await alarm(name.value, delay.value);
//     output.textContent = message;
//   }
//   catch (error) {
//     output.textContent = `Couldn't set alarm: ${error}`;
//   }
// });

// Workers 

// Create a new worker, giving it the code in "generate.js"
// const worker = new Worker('./generate.js');

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
// document.querySelector('#generate').addEventListener('click', () => {
//     const quota = document.querySelector('#quota').value;
//     worker.postMessage({
//         command: 'generate',
//         quota,
//     });
// });

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
// worker.addEventListener('message', (message) => {
//     document.querySelector('#output').textContent = `Finished generating ${message.data} primes!`;
// });

// document.querySelector('#reload').addEventListener('click', () => {
//     document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
//     document.location.reload();
// });

const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// Promise chain
alice1.animate(aliceTumbling, aliceTiming).finished.then(() =>
    alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
        alice3.animate(aliceTumbling, aliceTiming)
    })
)

// Async await
async function aliceAnimation() {
    await alice1.animate(aliceTumbling, aliceTiming).finished
    await alice2.animate(aliceTumbling, aliceTiming).finished
    await alice3.animate(aliceTumbling, aliceTiming).finished
}