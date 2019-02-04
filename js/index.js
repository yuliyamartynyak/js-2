const n = parseInt(prompt('Enter Fibonacci number'));

function findFibNumValue(n) {
    let arr = [1,1];
    do { arr.push((arr.length-2) + (arr.length-1));
    } while (arr.push < n+1);
    return (arr[n]);
}