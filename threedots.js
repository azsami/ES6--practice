const ages = [13, 24, 34 , 12, 22];
const ages2 = [43, 45, 23, 54, 29];
const ages3 = [54, 56, 57, 98, 43];

const allAges = ages.concat(ages2).concat([5]).concat (ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const taka = [650, 450, 540];
const maximun = Math.max(...taka);
console.log(maximun);