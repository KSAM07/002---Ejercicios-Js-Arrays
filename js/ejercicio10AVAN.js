const array1 = [
    { name: 'Cristiano Ronaldo', age: 25 },
    { name: 'Alan', age: 30 },
    { name: 'Juan', age: 35 }
];

const array2 = [
    { city: 'Portugal', country: 'Lisboa' },
    { city: 'Canada', country: 'US' },
    { city: 'Mexico', country: 'Mexico' }
];
const combinedArray = array1.map((obj, index) => {
    return { ...obj, ...array2[index] }; 
});
console.log(combinedArray);
