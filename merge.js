function merge(arr1, arr2) {
    let sortedArr = [];
    while(arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            sortedArr.push(arr1.shift());
        } else {
            sortedArr.push(arr2.shift());
        }
    }
    return [...sortedArr, ...arr1, ...arr2];
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

module.exports = { merge, mergeSort};