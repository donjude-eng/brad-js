const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");
const notFound = document.getElementById("notfound");

const apiURL = "https://api.lyrics.ovh";

//Search by song or artist stright way
// function searchSongs(term) {
//   fetch(`${apiUrl}/suggest/${{ term }}`)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// //Search by song or artist using async await;
async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();

  //console.log("Response", res);

  //console.log(data);
  showData(data);
}

// //Show song and artist in DOM (First method or version)
//function showData(data) {
//   let output = "";
//   data.data.forEach((song) => {
//     output += `
//         <li>
//         <span><strong>${song.artist.name}</strong> - ${song.title}</span>
//         <button class="btn" data-artist="${song.artist.name}"
//         data-songtitle="${song.title}">Get Lyrics</button>
//         </li>
//         `;
//   });

//console.log(output)
//result.innerHTML = `
//<ul class="songs">${output}</ul>
//`;
//}

// // Real simple method and the version(Second method)
function showData(data) {
  result.innerHTML = `
  <ul class="songs">
  ${data.data
    .map(
      (song) =>
        `<li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    </li>`
    )

    .join("")}
  </ul>
  `;

  if (data.prev || data.next) {
    more.innerHTML = `
      ${
        data.prev
          ? `<button class="btn" onclick="getMoreSongs('${data.prev}')"> Prev </button>`
          : ""
      }
      ${
        data.next
          ? `<button class="btn" onclick="getMoreSongs ('${data.next}')"> Next </button>`
          : ""
      }
      `;
    //console.log("Test data", data.next);
  } else {
    more.innerHTML = "";
  }
}

//Get Prev and next songs function
async function getMoreSongs(url) {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  const data = await res.json();

  showData(data);
}


// get lyrics fpr song

async function getLyrics(artist, songTitle) {
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await res.json();

    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

    result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>
    `;
    more.innerHTML = '';
}

//Event listners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert("Please type in a search term");
  } else {
    searchSongs(searchTerm);
  }
});


//Get lyrics button click
result.addEventListener('click', e => {
    const clickedEl = e.target;

    if(clickedEl.tagName === 'BUTTON') {
        const artist = clickedEl.getAttribute('data-artist');
        const songTitle = clickedEl.getAttribute('data-songtitle');

        console.log(artist)
        console.log(songTitle)

        getLyrics(artist, songTitle);

    }
});

