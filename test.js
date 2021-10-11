// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].


*/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let max = Math.max(...A)
    let searchNumber = max
    let solution = 1
    if(max <= 0) return 1
    while(searchNumber > 0  ){
        searchNumber -- ;
        const find = A.filter(element => element === searchNumber)
        if (find.length === 0 && searchNumber != 0) {
            solution = searchNumber;
            searchNumber = 0;
            return solution
        } else if(searchNumber === 0) return max += 1
    }
}


solution( [1, 2, 3])
