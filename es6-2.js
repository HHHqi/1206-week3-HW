let example= [20, -2, 4, -11, 0, 25];

function minimumValue(array){
    
    return array.reduce(function(prev, current) {
        return (prev < current) ? prev : current    
    }) 
}

console.log(minimumValue(example));