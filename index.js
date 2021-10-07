// const promise = new Promise((resolve, reject) => {
//   const canFullfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFullfill) {
//       resolve('исполнен');
//     }
//     reject('отклонен');
//   }, 1000);
// });
// // console.log(promise);
// promise.then(
//   result => {
//     console.log(`✅ ${result}`);
//   },
//   error => {
//     console.log(`❌ ${error}`);
//   },
// );

// const promise = new Promise((resolve, reject) => {
//   const canFullfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFullfill) {
//       resolve('исполнен');
//     }
//     reject('отклонен');
//   }, 1000);
// });
// console.log(promise);
// promise
//   .then(result => {
//     console.log(result);

//     return 5;
//   })
//   .then(x => {
//     console.log(x);

//     return 'hi';
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('в любом случае'));

// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(r => r.json())
//   .then(pokemon => {
//     console.log(pokemon);
//   });

// const fetchPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };
// fetchPokemonById(21).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log(pokemon);
// }

// function onFetchError(error) {
//   console.log(error);
// }
