let student = [
        {name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
        {name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60]},
        {name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20]},
        {name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99]}];

function studentWithHighestMarks(array){
    
    array.forEach((item,i) => {
       
        var sum=item.marks.reduce(function(a, b) {return a + b;});
       
        array[i]=Object.assign({},array[i],{sum:sum});
    });
   
    const max = array.reduce(function(prev, current) {
        return (prev.sum > current.sum) ? prev : current    
    }) 
    return max;
}

console.log(studentWithHighestMarks(student));