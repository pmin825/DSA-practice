// O(n) time, O(n) size

function chunk(array, size) {
    const chunked = []; // [[1,2], [3,4]] 
    
    for (let element of array) { // 4
        const last = chunked[chunked.length - 1]; // [3]
        
        if (!last || last.length === size) {
            chunked.push([element])
        }   else {
            last.push(element) // [3, 4]
        }
    }
    return chunked;
}

array = [1,2,3,4]
size = 2

chunk(array, size)