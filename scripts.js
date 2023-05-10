//  start off by declaring all const to be used throughout the script in the global scope
// 
import{
    BOOKS_PER_PAGE, books, genres, authors
}from "./data.js"

// creates search criteria to be used when searching for matchs, sets the string attached to the search to be lower case and includes it in the displayed search
let searchTerm = " ";
const matches = books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase()) || book.genres.toLowerCase().includes(searchTerm.toLowerCase()) )
// calculates the range, the amount of books to be displayed according to the value of the current page the user is on
const range = [(page - 1) * BOOKS_PER_PAGE, page * BOOKS_PER_PAGE]
let book = {};
// const previewFragment = document.createDocumentFragment();
    // sets the books each page and the remaining amount to be displayed after each instance
    const initial = matches.length > BOOKS_PER_PAGE ? BOOKS_PER_PAGE : matches.length;
    const remaining = matches.length - initial;
    const hasRemaining = matches.length > initial;

const extractedSearch = matches.slice(0, 36);
// destructures the book array so that only the relevant objects inside the array can be easier found by the search function
const [ authors, id, image, title ] = book;
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
// makes the book variable equal an empty object so it can be filled in by the searchs
// fetchs files from the data.js file to be used in the script.js scripts
// might improve performance of webpage loadtimes as it runs alongside the html and runs the data.js file key data points in the script.js file

if (!books && !Array.isArray(books)) {throw new Error('Source required')} 
if (!range && range.length < 2) {throw new Error('Range must be an array with two numbers')}

// console.log(typeof(matches))
// console.log checks whether the typeof(matches) is actually a string, array

// light and dark mode rgb ranges to be used by the user depending on preference



// for the "for" loop set the end of loop to 36 so it stops showing books when it reachs "extracted = 36"
// make {author, image, title, id} into an array so that they are easier to access
function displayBooks(start, end, books) {
const previewFragment = document.createDocumentFragment();
for (let i = start; i < end && i < books.length; i++) {
    const preview = {
      author: books[i].author,
      id: books[i].id,
      image: books[i].image,
      title: books[i].title,
    }

    const previewElement = document.createElement("div");
    previewElement.innerText = `
    <img src="${preview.image}" alt="${preview.title}">
    <h2>${preview.title}</h2>
    <p>${preview.author}</p>
  `;
  previewFragment.appendChild(previewElement)
    }

const listItems = document.querySelector(".list__items");
listItems.innerHTML = " "
listItems.appendChild(previewFragment);

const dataListButton = document.querySelector("[data-list-button]");
if (matches.length - (page * BOOKS_PER_PAGE) <= 0) {
    dataListButton.disabled = true;
    dataListButton.innerHTML = /* HTML */
    `<span>...<span>`
} else {
    dataListButton.disabled = true;
    dataListButton.innerHTML = /* html */ 
    ` 
  <span>Show more</span>
   <span class="list__remaining"> ${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : ''}</span>`
    }
}
// const dataListItems = document.querySelector(`[data-list-items]`).appendChild(fragment)
// const dataSearchAuthor = document.querySelector(`[data-search-authors]`);
// const dataSearchGenre = document.querySelector(`[data-search-genres]`);


// GENRES LOOP FUNCTION
// creates a option button in the html with a nested object giving value an assignment of "any" or "all genres"
const genresFrag = document.createDocumentFragment()
const genresElement = document.createElement('option')
genresElement.value = 'any'
genresElement.innerText = 'All Genres'
// for loop to dislay a list of values(books/any-genres) to output to the element
// how much should be displayed in the html/webpage.
// sets the amount of times the for loop should run according to the amount of entries that should be presented
for (const [id, name] of Object.entries(genres)) {
    const genresElement = document.createElement('option')
    genresElement.value = id;
    genresElement.innerText = name;
    genresFrag.appendChild(genresElement)
}
// sends the data-key searchs to the DOM? for genres in the data.js
// console.log(genreElement)

const dataSearchGenre = document.querySelector('[data-search-genres]').appendChild(genresFrag);
// console.log(dataSearchGenre)

// AUTHORS LOOP FUNCTION
// creates a recurring loop funciton for the author key
const authorsFrag = document.createDocumentFragment()
const authorElement = document.createElement('option')
authorElement.value = 'any'
authorElement.innerText = 'All Authors'
// sets the loop limit for how many author entries should be displayed on the webpage
// send the given amount to the element/ DOM?
for (const [id, name] of Object.entries(authors)) {
    const authorElement = document.createElement('option');
    authorElement.value = id;
    authorElement.innerText = name;
    authorsFrag.appendChild(authorElement);
}

const dataSearchAuthor = document.querySelector("[data-search-authors]").appendChild(authorsFrag);


// CSS SELECTORS
// CSS that checks whether the theme should be night or day depending on whether the data key returns true or false
data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
const v = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'night' : 'day';


const dataSettingsTheme = document.querySelector("[data-settings-theme]");
// do you make this into a object to set light and dark theme?
dataSettingsTheme.style.setProperty('--color-dark', cssThemeMode[v].dark);
dataSettingsTheme.style.setProperty('--color-light', cssThemeMode[v].light);
// console.log(matches.length)
//  = "Show more (books.length - BOOKS_PER_PAGE)"

// 
// a boolean statement that checks whether the data list button is enabled or disabled.
/* when the value of remaining books are less then 0 the .disabled is true which disables the 
button but while the remaining books are greater then 0 it will output the remaining number 
according to the equation as a span in the innerHTML*/
// LISTENERS,
//  should i add addeventlisteners here so that the js fires to the html whenever a button is pressed
// for the data-list?
// do we add an event listener to the list button within the css or the html
// selectors for selecting the DOM elements in the HTML website
// DOM ELEMENT SELECTORS
const searchOverlay = document.querySelector("[data-search-overlay]");
const settingsOverlay = document.querySelector("[data-settings-overlay]");
const searchCancel = document.querySelector("[data-search-cancel]");
const settingsCancel = document.querySelector("[data-settings-cancel]");
const settingsForm = document.querySelector("[data-settings-form]");
const listClose = document.querySelector("[data-list-close]");
const headerSearch = document.querySelector("[data-header-search]");
const searchTitle = document.querySelector("[data-search-title]");
const searchForm = document.querySelector("[data-search-form]");
const dataListItems = document.querySelector("[data-list-items]");

// function used to set book previews to a given value for each page loaded to be ran each time button is clicked
// EVENT LISTENERS
searchOverlay.addEventListener('click',showSearchOverlay);
settingsOverlay.addEventListener("submit", handleSettingsSubmit);
searchCancel.addEventListener('click', hideSearchOverlay);
settingsCancel.addEventListener('click', hideSettingsOverlay);
settingsForm.addEventListener('submit', handleSettingsSubmit);
listClose.addEventListener('click', hideList);
headerSearch.addEventListener('click', showSearchOverlay);
searchTitle.addEventListener('click', handleSearchTitle);
searchForm.addEventListener('submit',handleSearchSubmit);
listItems.addEventListener("click", handleListItems);


// FUNCTIONS
// functions to be used by the querySelectors
// resonsible for the search functions overlay on the webpage to display the pop-up window in which the user can search books
function handleSettingsSubmit() {
    settingsOverlay.setAttribute('open', true);
}

function showSearchOverlay() {
    searchOverlay.setAttribute('open', true);
    searchTitle.focus();
}

function hideSearchOverlay() {
    searchOverlay.removeAttribute('open');
}

function hideSettingsOverlay() {
    settingsCancel.removeAttribute('open');
}

// the settings overlay in which the user can adjust the light and dark mode of the webpage
// these commented out functions were previous iterations of my code for these functions
// function handleSettingsSubmit() {
//     settingsOverlay.setAttribute('open', true);
// }

// function handleSettingsSubmit() {
    //     settingsOverlay.removeAttribute('open');
    // }
    
    function handleSettingsSubmit(event) {
        event.preventDefault();
        const formData = new FormData(settingsFrom);
        const settings = Object.fromEntries(formData);
        // this does an 'event' with the settings const
        if (settings.theme === 'dark') {
            document.documentElement.style.setProperty('--color-dark', '#333');
            document.documentElement.style.setProperty('--color-light', '#eee');
        } else {
            document.documentElement.style.setProperty('--color-dark', '#eee');
        document.documentElement.style.setProperty('--color-light', '#333');
    }
    hideSettingsOverlay();
}

// filters books based on the users search criteria
// filter criteria gets sent from the code above that searchs based on the number of hits from 0-36
function handleSearchSubmit(event) {
    event.preventDefault();
    const formData = new FormData(searchForm);
    const filters = Object.fromEntries(formData);
    searchTerm = filters.title.toLowerCase();
    const genreId = filters.genre;
    const authorId = filters.author;
    matches = books.filter(book => {
        const titleMatch = book.title.toLowerCase().includes(searchTerm);
        const genreMatch = genreId === 'any' || book.genres.includes(genreId);
        const authorMatch = authorId === 'any' || book.author === authorId;
        return titleMatch && genreMatch && authorMatch;
    });
    displayBooks(0, BOOKS_PER_PAGE, matches);
    hideSearchOverlay();
}

// data attributes
const dataListMessage = document.querySelector(`[data-list-message]`);
if (matches.length < 1) { 
    dataListMessage.classList.add('list__message_show');
} else {
    dataListMessage.classList.remove('list__message_show');
}


dataListItems.innerHTML = " " ;
const fragment = document.createDocumentFragment();
const extractedRange = matches.slice(range[0], range[1]);

const fragments = document.createDocumentFragment();
for (let i = 0; i < initial; i++) {
    const { author: authorId, id, image, title } = matches[i];
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);
    element.innerHTML = /* html */ `
    <img class="preview__image" src="${image}">
    <div class="preview__info">
    <h3 class="preview__title">${title}</h3>
    <div class="preview__author`

    fragment.appendChild(element)
}

// function that creates a new item in the DOM whenever a search finds the given books
// when matches for the relevent keys are found or returned as true it is sent to the webpage
function handleSearchSubmit(event) {
    event.preventDefault();
    const formData = new FormData(searchForm);
    const filters = Object.fromEntries(formData);
    searchTerm = filters.title.toLowerCase();
    const genreId = filters.genre;
    const authorId = filters.author;
    matches = books.filter(book => {
        const titleMatch = book.title.toLowerCase().includes(searchTerm);
        const genreMatch = genreId === 'any' || book.genres.includes(genreId);
        const authorMatch = authorId === 'any' || book.author === authorId;
        return titleMatch && genreMatch && authorMatch;
    });
    hideSearchOverlay();
}
displayBooks(0, BOOKS_PER_PAGE);

// DOM selectors for the data-atrributes to be used by the function below
const dataListActive = document.querySelector("[data-list-active]");
const dataListBlur = document.querySelector("[data-list-blur]");
const dataListTitle = document.querySelector("[data-list-title]");
const dataListSubtitle = document.querySelector("[data-list-subtitle]");
const dataListDescription = document.querySelector("[data-list-description]");

function handleListItems(event) {
    const previewId = event.target.dataset.preview;
    for (const singleBook of books) {
        if (singleBook.id === previewId) {
            book = singleBook;
            break;
        }
    }
    if (book) {
        dataListActive.open = true;
        dataListBlur.src =book.image;
        dataListTitle.innerText = book.title;
        dataListSubtitle.innerText = `${authors[book.author]} (${new Date(book.published).getFullYear()})`;
        dataListDescription.innerText = book.description;
    }
}
    
