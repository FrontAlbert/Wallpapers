const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");

// clear the old images with the new searched ones

export function clearFields() {
    gallery.innerHTML = "";
    searchInput.value = "";
}
