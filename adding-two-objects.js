require('dotenv').config();

function sumObject(objectOne, objectTwo) {
    const objectNew = { ...objectOne };
    for (const fields in objectTwo) {
        if (objectNew[fields]) {
            objectNew[fields] = objectNew[fields] + objectTwo[fields];
        } else {
            objectNew[fields] = objectTwo[fields];
        }
    }
    return objectNew;
}

const first = process.env.FIRST;
const second = process.env.SECOND;

const firstObj = JSON.parse(first);
const secondObj = JSON.parse(second);

console.log(sumObject(firstObj, secondObj));

module.exports = { sumObject, firstObj, secondObj };

