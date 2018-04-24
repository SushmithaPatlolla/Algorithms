// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    results = []

    for(i =0; i<n; i++){
       results.push([])
    }

    var counter = 1
    var startrow = 0
    var endrow = n -1
    var startcolumn = 0
    var endcolumn = n - 1

    while(startcolumn <= endcolumn && startrow <= endrow){

        for(i = startcolumn; i<= endcolumn; i++){
            results[startrow][i] = counter
            counter++ 
        }
        startrow++
        for(i = startrow; i<=endrow; i++){
            results[i][endcolumn] = counter
            counter++
        }
        endcolumn--
        for(i = endcolumn; i>=startcolumn; i--){
            results[endrow][i] = counter
            counter++
        }
        endrow--
        for(i=endrow; i>=startrow; i--){
            results[i][startcolumn] = counter
            counter++
        }
        startcolumn++
       
        
    }
    return results;
}

module.exports = matrix;
