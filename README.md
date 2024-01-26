# Adding object keys and fields for Node.js

## Installation
```sh

npm install --adding-two-objects

```

## Get started

```sh
const { sumObject, firstObj, secondObj } = require('./adding-two-objects');
```

## Note
## Option 1
Where **sumObject** is a function that takes 2 object arguments
Next you **firstObj, secondObj** We can pass these 2 arguments using Command-line interface

```sh
FIRST='{"cool":"yes","value":"5"}' SECOND='{"cool":"no","result": "15"}' node <your document.js>
```

## Option 2
You create a .env file and add 2 variables there.
```sh
FIRST={"cool":"yes","value":"5"}
SECOND={"cool":"no","result": "15"}
```
Then you can run using the command, the data in the variables will be taken from the .env file.
```sh
node <your document.js>
```

## License

MIT

