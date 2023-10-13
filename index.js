const inputSearch = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const accessKey = 'zjvpL-rn0NYlHrwBkg7OgXLmvAYNctFEqxhteuIxG2E';
const container = document.getElementById('container');
const showMoreButton = document.getElementById('showmore-btn');

let keyword = '';
let page = 1;
async function searchImages() {
    keyword = inputSearch.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&per_page=12&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const results = data.results;
    if (page === 1) {
        container.innerHTML="";
    }
    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.classList.add('result');
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        imageLink.appendChild(image)
        container.appendChild(image);

        result.addEventListener
    })
    showMoreButton.style.display = 'block';
}

searchButton.addEventListener('click',(e)=>{
    e.preventDefault(); 
    page = 1;
    searchImages();
})
showMoreButton.addEventListener('click',()=>{
    page++;
    searchImages();
})