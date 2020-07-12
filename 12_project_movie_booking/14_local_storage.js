const container = document.querySelector('.container');
const seats =document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


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


    //console.log(selectedSeats);
    const selectedSeatsCount = selectedSeats.length;
    //console.log(selectedSeatsCount)

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}
// Movie select event
movieSelect.addEventListener('change' , e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
} )

// seat click event
container.addEventListener('click' , e => {
    //console.log(e.target)
    if (
        e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected')

        updateSelectedCount();
    }
})
