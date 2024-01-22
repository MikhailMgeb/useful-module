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

module.exports = { sumObject };
