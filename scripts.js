//  start off by declaring all const to be used throughout the script in the global scope
// 
import{
    BOOKS_PER_PAGE, books, genres, authors
}from "./data.js"

// --ALL GLOBALLY ASSIGNED CONSTANTS--
// const matches = books.filter(book => book.title.toLowerCase().includes(searchTitle.toLowerCase()) || book.author.toLowerCase().includes(dataSearchAuthor.toLowerCase()) || book.genres.toLowerCase().includes(dataSearchGenre.toLowerCase()) )
// creates search criteria to be used when searching for matchs, sets the string attached to the search to be lower case and includes it in the displayed search
// destructures the book array so that only the relevant objects inside the array can be easier found by the search function
const matches = books;
const page = 1
// calculates the range, the amount of books to be displayed according to the value of the current page the user is on
const range = [(page - 1) * BOOKS_PER_PAGE, page * BOOKS_PER_PAGE]
// let matches = books; a variable used previously instead of the filter function written above
// sets the books each page and the remaining amount to be displayed after each instance
const start = (page - 1) * BOOKS_PER_PAGE;
const end = start + BOOKS_PER_PAGE;
// variable shortcut to be used when using the theme function
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
// --ALL QUERY.SELECTORS TO BE USED IN THE SCRIPT--
const dataListButton = document.querySelector("[data-list-button]")
const dataSearchOverlay = document.querySelector("[data-search-overlay].data .overlay");
const dataSettingsOverlay = document.querySelector("[data-settings-overlay]");
const dataSearchCancel = document.querySelector("[data-search-cancel]");
const dataSettingsCancel = document.querySelector("[data-settings-cancel]");
const dataSettingsForm = document.querySelector("[data-settings-form]");
const dataListClose = document.querySelector("[data-list-close]");
const dataLeaderSearch = document.querySelector("[data-header-search]");
const dataSearchTitle = document.querySelector("[data-search-title]");
const dataSearchForm = document.querySelector("[data-search-form]");
const dataListItems = document.querySelector("[data-list-items]");
const dataSearchGenre = document.querySelector('[data-search-genre]')
const dataSearchAuthor = document.querySelector('[data-search-author]')
const dataHeaderSettings = document.querySelector('[data-header-settings]')

const dataListActive = document.querySelector("[data-list-active]");
const dataListBlur = document.querySelector("[data-list-blur]");
const dataListTitle = document.querySelector("[data-list-title]");
const dataListSubtitle = document.querySelector("[data-list-subtitle]");
const dataListDescription = document.querySelector("[data-list-description]");
const dataSettingsTheme = document.querySelector("[data-settings-theme]");
const dataListMessage = document.querySelector(`[data-list-message]`);

// makes the book variable equal an empty object so it can be filled in by the searchs
// fetchs files from the data.js file to be used in the script.js scripts
// might improve performance of webpage loadtimes as it runs alongside the html and runs the data.js file key data points in the script.js file

if (!books && !Array.isArray(books)) {
    throw new Error('Source required')
} 
if (!range && range.length < 2) {
    throw new Error('Range must be an array with two numbers')
}

//  --FILES TO BE ADDED TO THE DOM WHEN THE SCRIPT IS CREATED--
const extractedFragment = document.createDocumentFragment();
const extractedBooks = books.slice(start, end);

// for the "for" loop set the end of loop to 36 so it stops showing books when it reachs "extracted = 36"
// make {author, image, title, id} into an array so that they are easier to access
function createPreview(preview) {
    const {authors, id, image, title} = preview

    const showPreview = document.createElement('button')
    showPreview.classList = 'preview'
    showPreview.setAttribute('data-preview', id)

    showPreview.innerHTML = /* html */ `
        <img
            class="preview__image"
            src="${image}"
        />

        <div class="preview__info">
            <h3 class="preview__title">'${title}'</h3>
            <div class="preview__author">${'authors' [authors]}
            </div>
        </div>
    `

    return showPreview
}

for (const preview of extractedBooks){
    const showPreview = createPreview(preview);
    extractedFragment.appendChild(showPreview);
}
// puts the value gotten within extractedBooks into the datalistButton DOM to be used when the datalistbutton function is called later
dataListButton.appendChild(extractedFragment)

// after the preview button is pressed it needs to create a new function for when the button is pressed again everytime to load the next page of books 

dataListButton.addEventListener('click', () => {
    page++;
    
    const newExtractedFragment = document.createDocumentFragment();
    const newExtractedBooks = books.slice(start, end);

    for (const preview of newExtractedBooks){
        const showPreview = createPreview(preview);
        newExtractedFragment.appendChild(showPreview)
    }
    // append the new book preview to the DOM element in the browser 
    dataListButton.appendChild(newExtractedFragment);
    // math responsible for checking how much books remain and keeps the show more button active for aslong as the total books arent zero or less
    if (matches.length - (page * BOOKS_PER_PAGE) <= 0) {
        dataListButton.disabled = false;
        dataListButton.innerHTML = /* HTML */
        `<span>...<span>`
    } else {
        dataListButton.disabled = true;
        dataListButton.innerHTML = /* html */ 
        ` 
      <span>Show more</span>
       <span class="list__remaining"> '${matches.length - (page * BOOKS_PER_PAGE) > 0 ? matches.length - (page * BOOKS_PER_PAGE) : ''}'</span>`
        }
})



// GENRES LOOP FUNCTION
//  --FUNCTION FOR SEARCH OVERLAY--
dataSearchOverlay.addEventListener('click', () => {
    dataSearchOverlay.showModal();
    dataSearchTitle.focus();
})
dataSearchCancel.addEventListener('click', () => {
    dataSearchOverlay.close();
})


// creates a option button in the html with a nested object giving value an assignment of "any" or "all genres"
const genresFragment = document.createDocumentFragment();
const genresElement = document.createElement('option');
genresElement.value = 'any';
genresElement.innerText = 'All Genres';
genresFragment.appendChild(genresElement);
// for loop to dislay a list of values(books/any-genres) to output to the element
// how much should be displayed in the html/webpage.
// sets the amount of times the for loop should run according to the amount of entries that should be presented
for (const [id, name] of Object.entries(genres)) {
    const genresElement = document.createElement('option');
    genresElement.value = id;
    genresElement.innerText = name;
    genresFragment.appendChild(genresElement);
}

// appends the values given in the genre search into the DOM
// dataSearchGenre.appendChild(genresFragment);

// creates a recurring loop funciton for the author key
const authorsFragment = document.createDocumentFragment();
const authorElement = document.createElement('option');
authorElement.value = 'any';
authorElement.innerText = 'All Authors';
authorsFragment.appendChild(authorElement);
// sets the loop limit for how many author entries should be displayed on the webpage
// send the given amount to the element/ DOM?
for (const [id, name] of Object.entries(authors)) {
    const authorElement = document.createElement('option');
    authorElement.value = id;
    authorElement.innerText = name;
    authorsFragment.appendChild(authorElement);
}
// dataSearchAuthor.appendChild(authorsFragment);


// CSS SELECTORS
// CSS that checks whether the theme should be night or day depending on whether the data key returns true or false
//  --CSS SELECTOR FUNCTIONS--
dataHeaderSettings.addEventListener('click', () => {
    dataHeaderSettings.showModal();
    })
dataSearchCancel.addEventListener('click', () => {
    dataSearchOverlay.close();
})

dataSettingsTheme.value === window.matchMedia() && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
const v = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'night' : 'day';

// do you make this into a object to set light and dark theme?
dataSettingsTheme.style.setProperty('--color-dark', cssThemeMode[v].dark);
dataSettingsTheme.style.setProperty('--color-light', cssThemeMode[v].light);

// 
// a boolean statement that checks whether the data list button is enabled or disabled.
/* when the value of remaining books are less then 0 the .disabled is true which disables the 
button but while the remaining books are greater then 0 it will output the remaining number 
according to the equation as a span in the innerHTML*/


// function used to set book previews to a given value for each page loaded to be ran each time button is clicked

// --EVENT LISTENERS TO BE USED BY THE SCRIPT--


// filters books based on the users search criteria
// filter criteria gets sent from the code above that searchs based on the number of hits from 0-36
dataSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(searchForm);
    const filters = Object.fromEntries(formData);
    const result = [];

    for (const book of books) {
        // if any returns false in the sequence the loop runs again searching each book until the value/string returns true for any title, genre or author
        const titleMatch = filters.title !== '' && book.title.toLowerCase().includes(filters.title.toLowerCase());
        const genreMatch = filters.genre !== 'any' && book.genres.includes(filters.genre);
        const authorMatch = filters.author !== 'any' && book.author.includes(filters.author);
        
        // if any search returns true for any of the 3 variables the values will be pushed to the empty results array
        if (titleMatch || authorMatch || genreMatch) {
        result.push(book);
    }
}

// data attributes
//  if the new array of results returns nothing the button to show more books should disable since if theirs no books there shouldnt be another page
if (result.length < 1) { 
    dataListItems.innerHTML = null;
    dataListButton.disabled = true;
    dataListMessage.classList.add('list__message_show');

    const remaining = result.length - (page * BOOKS_PER_PAGE);
    dataListButton.innerHTML = /* HTML */`
    <span>show more<span>
    <span class="list__remaining"> (${remaining > 0 ? remaining : 0})'<span>
    `
} else {
    dataListMessage.classList.remove('list__message_show');
    dataListButton.innerHTML = '';

    const searchstart = (page - 1) * BOOKS_PER_PAGE;
    const searchEnd = searchstart * BOOKS_PER_PAGE;

    const searchExtractedFragment = document.createDocumentFragment();
    const searchExtractedBooks = result.slice(searchstart, searchEnd + 1);

    for (const preview of searchExtractedBooks){
        const showPreview = createPreview(preview);
        searchExtractedFragment.appendChild(showPreview)
        }
    
//  puts the fragment of the books found in the search into the datalist which is then viewed bu the website
dataListItems.appendChild(searchExtractedFragment);

const remaining = result.length - page * BOOKS_PER_PAGE;
        dataListButton.innerHTML = /* HTML */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining > 0 ? remaining : 0})</span>
        `;

        dataListButton.disabled = remaining <= 0;

// creates another event listeners to load the next 36 books in the search function then return the remaining amount aswell as appending it in the DOM so that the script reads the remaining correctly
        dataListButton.addEventListener('click', () => {
            page++;
        
            const moreSearchStart = (page - 1) * BOOKS_PER_PAGE
            const moreSearchEnd = moreSearchStart + BOOKS_PER_PAGE
        
            const moreSearchBookExtracted = result.slice(moreSearchStart, moreSearchEnd + 1)
        
            const moreSearchBookFragment = document.createDocumentFragment()
        
            for (const preview of moreSearchBookExtracted) {
                const showPreview = createPreview(preview)
                moreSearchBookFragment.appendChild(showPreview)
            }

            dataListItems.appendChild(moreSearchBookFragment);
        
            const remaining = result.length - page * BOOKS_PER_PAGE;
            dataListButton.innerHTML = /* HTML */ `
            <span>Show more</span>
            <span class="list__remaining"> (${remaining > 0 ? remaining : 0})</span>
            `;
        
            dataListButton.disabled = remaining < 0;
        })
}
// if the entire function runs but nothing is processed or all returns false the fallback is to reset and scroll page to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dataSearchOverlay.close()
    dataSearchForm.reset()
})

// the settings overlay in which the user can adjust the light and dark mode of the webpage
dataHeaderSettings.addEventListener('click', () => {
    dataSettingsOverlay.showModal()
})

dataSettingsCancel.addEventListener('click', () => { 
    dataSettingsOverlay.close()
})    


function handleListItems(event) {
    const previewId = event.target.dataset.preview;
    for (const singleBook of books) {
        if (singleBook.id === previewId) {
            books = singleBook;
            break;
        }
    }
    if (books) {
        dataListActive.open = true;
        dataListBlur.src =books.image;
        dataListTitle.innerText = books.title;
        dataListSubtitle.innerText = `${authors[books.author]} (${new Date(books.published_date).getFullYear()})` || '';
        dataListDescription.innerText = books.description;
    }
}
