const auth = "563492ad6f91700001000001c84b1385e5514d9b9610c8d2093a0ee6";
// //ADD THE AUTH KEY
// 563492ad6f91700001000001a0104f06229b4474b30d171e43bef3e4

const gallery = document.querySelector(".gallery");
const more = document.querySelector(".more");
let fetchLink;

export async function curatedPhotos(morepages) {
    fetchLink = `https://api.pexels.com/v1/curated?per_page=30&page=${morepages}`;
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

// Insert the forEach photo into gallery
// AppendChild will add it to gallery which is gallery
