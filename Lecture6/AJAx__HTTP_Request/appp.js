const data = [
    {
        "id": 1,
        "name": "john",
        "occup:": "developer"
    },
    {
        "id": 1,
        "name": "john",
        "occup:": "developer"
    },
    {
        "id": 1,
        "name": "john",
        "occup:": "developer"
    }
]

console.log(typeof (data));

const stringdata = JSON.stringify(data);

console.log(typeof (stringdata));




console.log(stringdata);

const parsedata = JSON.parse(stringdata);
console.log(parsedata)
console.log(typeof (parsedata));

