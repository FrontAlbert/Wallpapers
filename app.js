import { curatedPhotos } from "./components/fetch.js";
import { searchPhotos } from "./components/search.js";

const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
const more = document.querySelector(".more");
let currentSearch;
let searchValue;
let currentPage = 2;

// Event Listener
// For Searching - > 1. input runs updateInput Function making searchValue = What you typed in 2. form=search form , when submitted, the function runs and brings the searchValue into the searchPhotos section //
searchInput.addEventListener("input", updateInput);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    currentSearch = searchValue;
    searchPhotos(searchValue);
});
function updateInput(e) {
    searchValue = e.target.value;
}

more.addEventListener("click", nextPage);

// Trouble Shoot this
function nextPage() {
    let morepages = currentPage++;
    console.log(morepages)
    curatedPhotos(morepages);
}

// Functions
searchPhotos();
curatedPhotos();
