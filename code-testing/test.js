const handleSearchcancel = () => {
    event.preventDefault();
    data.search.overlay.showModal();
    data.search.cancel.addEventListener('click',  () => {
    data.search.overlay.close();
    })
}


data.search.cancel.addEventListener('click', handleSearchcancel)

data-search-cancel.click(document.querySelector(`[data-search-overlay]`).open === false )



data-settings-cancel.click() { document.querySelector(`[data-settings-overlay]`).open === false }
data-settings-form.submit() { document.querySelector(`[actions.settings.submit]`) }
data-list-close.click() { document.querySelector(`[data-list-active]`).open === false }



// fetchs files from the data.js file to be used in the script.js scripts
// might improve performance of webpage loadtimes as it runs alongside the html and runs the data.js file key data points in the script.js file

if (!books && !Array.isArray(books)) {
    throw new Error('Source required')};
if (!range && range.length < 2) {
    throw new Error('Range must be an array with two numbers')};

// console.log(typeof(matches))
// console.log checks whether the typeof(matches) is actually a string, array

// light and dark mode rgb ranges to be used by the user depending on preference
const cssThemeMode = {
day: {
    dark: '10, 10, 20',
    light: '255, 255, 255',
},

night: {
    dark: '255, 255, 255',
    light: '10, 10, 20',
    },
}

const previewFragment = document.createDocumentFragment();
const extractedSearch = books.slice(0, 36);
const [ authors, id, image, title ] = matches;


// for the "for" loop set the end of loop to 36 so it stops showing books when it reachs "extracted = 36"
// make {author, image, title, id} into an array so that they are easier to access
for (let i = 0; i < extractedSearch.length ; i++) {
    const preview = {
        author: extractedSearch[i].author,
        id: extractedSearch[i].id,
        image: extractedSearch[i].image,
        title: extractedSearch[i].title,
    }

    const previewElement = document.createElement("div");
    previewElement.innerText =//  start off by declaring all const to be used throughout the script in the global scope
// 
import{
    BOOKS_PER_PAGE, authors, genres, books, 
}from "./data"

const matches = books
const page = 1;
