const { sumObject } = require('./summ');
require('dotenv').config();

const first = process.env.FIRST;
const firstObj = JSON.parse(first);

const second = process.env.SECOND;
const secondObj = JSON.parse(second);

console.log(sumObject(firstObj, secondObj));