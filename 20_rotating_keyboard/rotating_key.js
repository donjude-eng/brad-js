<<<<<<< HEAD


=======
// const keyLetters = ['row1', 'row2', 'row3', 'row4', 'row5']
// document.addEventListener('click' , switchRows)

// //console.log(keyLetters)


// function switchRows(e) {
//   let classList;
//   classList = classList.nodelist;

//   console.log(classList)
//

document.getElementById('row1').addEventListener('click' , toggleRows);
document.getElementById('A').addEventListener('click' , toggleRows);

function toggleRows(e) {
    e.preventDefault();
    document.getElementById('row1').value +='A';
    console.log('Pressed A')
}
>>>>>>> e2f2ed35fa2e5f46fc9435476686467c59d5549a
