 function SolveThis(obj) {
    let res = {}; // result object

    for (let key in obj) {
        let value = obj[key]; 
        switch (key) {
            case "sum":
                res[key] = value.reduce((a, b) => a + b, 0);
                break;
            case "max":
                res[key] = Math.max(...value);
                break;
            case "min":
                res[key] = Math.min(...value);
                break;
            case "round":
                res[key] = Math.round(value); 
                break;
            case "abs":
                res[key] = Math.abs(value);
                break;
            case "ceil":
                res[key] = Math.ceil(value);
                break;
            case "floor":
                res[key] = Math.floor(value);
                break;
            case "random":
                res[key] = Math.random();
                break;
            default:
                res[key] = "Operation not supported";
        }
    }

    return res;
}

//  checking result
console.log(SolveThis({
    sum: [3, 2, 4],
    max: [2, 4, 3, 5],
    min: [5, 3, 4, 3],
    round: 4.7,
    abs: -12,
    ceil: 3.2,
    floor: 6.9,
    random: []
}));