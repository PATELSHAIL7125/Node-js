// function add(a, b) {
//     return a + b;
// }

function sub(a, b) {
    return a - b;
}
// for import the function in the another file we need to export the function

module.exports = {
    // add,
    sub
}
// IN SECOND WAY FOR A EXPORT 

exports.add =(a,b) =>  a+b;



