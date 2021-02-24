const auth = "563492ad6f91700001000001c84b1385e5514d9b9610c8d2093a0ee6"; //ADD THE AUTH KEY
const gallery = document.querySelector(".gallery");
import { clearFields } from "./clearFields.js";
let fetchLink;

export async function searchPhotos(query) {
    clearFields();
    fetchLink = `https://api.pexels.com/v1/search?query=${query}&per_page=60`;
    const dataFetch = await fetch(fetchLink, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth,
        },
    });
    const data = await dataFetch.json();
    console.log(data);
    data.photos.forEach((x) => {
        const galleryImg = document.createElement("div");
        galleryImg.classList.add("gallery-img");
        galleryImg.innerHTML = `
        <div class="gallery-info">
            <a href=${x.src.original}>Download</a>
            <p>Photo by ${x.photographer}</p>
        </div>
        <img src=${x.src.large}></img>
        `;
        gallery.appendChild(galleryImg);
    });
}
