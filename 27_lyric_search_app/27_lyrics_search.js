const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiUrl = 'https://api.lyrics.ovh';

//Search by song or artist stright way
// function searchSongs(term){
//     fetch(`${apiUrl}/suggest/${{term}}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

//Search by song or artist using async await;
async function searchSongs(term){
    const res = await fetch(`${apiUrl}/suggest/${{term}}`);
    const data = await res.json();

    console.log(data)
    showData(data);

}

//show song and artist in DOm
function showData(data) {

    let output = '';

    data.data.forEach(song => {
    })

}

//Event listners
form.addEventListener('submit', e => {
    e.preventDefault();

    const searchTerm = search.value.trim();

    if(!searchTerm){
        alert('Please type in a search term');

    }else {
        searchSongs(searchTerm);

    }
})
