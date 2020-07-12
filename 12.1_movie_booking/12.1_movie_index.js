const container = document.querySelector('.container');
const seats =document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


populateUI();


let ticketPrice = +movieSelect.value;
//console.log(typeof ticketPrice)

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');


    //This is important to keep in mind.
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat)
    );
    //console.log(seatsIndex);

    localStorage.setItem('selectedSeats' , JSON.stringify(seatsIndex));
    //const val = JSON.stringify(seatsIndex);
    console.log(typeof val) ///A concern


    //console.log(selectedSeats);
    const selectedSeatsCount = selectedSeats.length;
    //console.log(selectedSeatsCount)

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}