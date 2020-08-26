// Get input Element
const filterInput = document.getElementById('filterInput');
// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
// Get Value of input
const filterValue = 
document.getElementById('filterInput').value.toUpperCase();

// Get names ul
const ul = document.getElementById('names');
// Get li's form ul
const li = ul.querySelectorAll('li.collection-item');
// Loop thro collection-item li's
for (let i = 0;i < li.length; i++){
    let a = li[i].getElementsByTagName('a')[0];
    // If it matches
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1 ){
        li[i].style.display = '';
    } else {
        li[i].style.display = 'none';
    }
}
}