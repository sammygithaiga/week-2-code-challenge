function primeNumber(x) {
    if (x <= 1) {
        return false;
    }
    if (x <= 3) {
        return true;
    }
    if (x % 2 == 0 || x % 3 == 0) {
        return false;
    }
    let v = 5;
    while (v * v <= x) {
        if (x % v == 0 || x % (v + 2) == 0) {
            return false;
        }
        v += 6;
    }
    return true;
}

function extractPrimeNumber(arr) {
    const primeArr = [];
    for (let num of arr) {
        if (primeNumber(num)) {
            primeArr.push(num);
        }
    }
    return primeArr;
}


const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11 ,12 ,13 ,14,15, 16, 17, 18 ,19, 20 ,21 ,22 ,23,24 ,25 ,26 ,27 ,28 ,29 ,30];
const result = extractPrimeNumber(inputArray);
console.log(result); 