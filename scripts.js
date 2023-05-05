//  start off by declaring all const to be used throughout the script in the global scope
// 
import{
    BOOKS_PER_PAGE, authors, genres, books, 
}from "./data"

const matches = books
const page = 1;

// fetchs files from the data.js file to be used in the script.js scripts
// might improve performance of webpage loadtimes as it runs alongside the html and runs the data.js file key data points in the script.js file

if (!books && !Array.isArray(books)) {throw new Error('Source required')} 
if (!books && books.length < 2) {throw new Error('Range must be an array with two numbers')}

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
    previewElement.innerText = `
    <img src="${preview.image}" alt="${preview.title}">
    <h2>${preview.title}</h2>
    <p>${preview.author}</p>
  `;
}

const listItems = document.querySelector("list__items");
    listItems.appendChild(previewFragment);

// const dataListItems = document.querySelector(`[data-list-items]`).appendChild(fragment)



// GENRES LOOP FUNCTION
// creates a option button in the html with a nested object giving value an assignment of "any" or "all genres"
const genresFrag = document.createDocumentFragment()
const genresElement = document.createElement('option')
genresElement.value = 'any'
genresElement.innerText = 'All Genres'
genresFrag.appendChild(genresElement)
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
console.log(genreElement)

const dataSearchGenre = document.querySelector('[data-search-genres]').appendChild(genresFrag);
console.log(dataSearchGenre)

// AUTHORS LOOP FUNCTION
// creates a recurring loo funciton for the author key
const authorsFrag = document.createDocumentFragment()
const authorElement = document.createElement('option')
authorElement.value = 'any'
authorElement.innerText = 'All Authors'
authorsFrag.appendChild(authorElement)
// sets the loop limit for how many author entries should be displayed on the webpage
// send the given amount to the element/ DOM?
for (const [id, name] of Object.entries(authors)) {
    const authorElement = document.createElement('option');
    authorElement.value = id;
    authorElement.innerText = name;
    authorsFrag.appendChild(authorElement);
}

const dataSearchAuthor = document.querySelector('[data-search-authors]').appendChild(authors);


// CSS SELECTORS
// CSS that checks whether the theme should be night or day depending on whether the data key returns true or false
data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
const v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' : 'day'


const dataSettingsTheme = document.querySelector(`[data-settings-theme]`)
// do you make this into a object to set light and dark theme?
dataSettingsTheme.style.setProperty('--color-dark', css[v].dark);
dataSettingsTheme.style.setProperty('--color-light', css[v].light);
// console.log(matches.length)
//  = "Show more (books.length - BOOKS_PER_PAGE)"

// 
// a boolean statement that checks whether the data list button is enabled or disabled.
/* when the value of remaining books are less then 0 the .disabled is true which disables the 
button but while the remaining books are greater then 0 it will output the remaining number 
according to the equation as a span in the innerHTML*/
const dataListButton = document.querySelector(`[data-list-button]`)
if (matches.length - (page * BOOKS_PER_PAGE) <= 0) {
    dataListButton.disabled = true;
    dataListButton.innerHTML = /* HTML */
    `<span>...<span>`
} else {
    dataListButton.innerHTML = /* html */ 
    ` 
  <span>Show more</span>
   <span class="list__remaining"> ${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : ''}</span>
   `
 }
// listeners,
//  should i add addeventlisteners here so that the js fires to the html whenever a button is pressed
// for the data-list?
// do we add an event listener to the list button within the css or the html
const searchOverlay = document.querySelector(`[data-search-overlay]`)
searchOverlay.addEventListener('click',() => {
 showSearchOverlay();
})

const SettingsOverlay =  document.querySelector(`[data-settings-overlay]`).open === false 
const SearchCancel =  document.querySelector(`[data-search-cancel]`)
const SettingsCancel =   document.querySelector(`[data-settings-cancel]`).open === false
const SettingsForm =   document.querySelector(`[data-settings-form]`)
const ListClose =   document.querySelector(`[data-list-close]`).open === false











// const dataSearchCancel = document.querySelector(`[data-search-cancel]`).addEventListener
// const dataSettingsCancel = document.querySelector(`[data-settings-cancel]`).addEventListener
// dataSettingsCancel.addEventListener(document.querySelector(`[data-settings-overlay]`)
// const dataSettingsForm = document.querySelector(`[data-settings-form]`).addEventListener
// dataSettingsForm.addEventListener(document.querySelector(`[actions.settings.submit]`))
// const dataListClose = document.querySelector(`[data-list-close]`).addEventListener
// dataListClose.addEventListener(document.querySelector(`[data-list-active]`)
// function used to set book previews to a given value for each page loaded to be ran each time button is clicked


const handleSearchCancel= (event) => {
    // modal shows dialogue hidden overlays/text 
    event.preventDefault();
    html.help.overlay.showModal(); 
    // creates a listener to check if the button is clicked by the user
    html.help.cancel.addEventListener("click", () =>{
        html.help.overlay.close();
    })
}


data-header-search.click() {
    data-search-overlay.open === true ;
    data-search-title.focus();
}

data-search-form.click(filters) => {
    preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    result = []

    for (book; booksList; i++) {
        titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
        authorMatch = filters.author = 'any' || book.author === filters.author

        {
            genreMatch = filters.genre = 'any'
            for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
        }

        if (titleMatch && authorMatch && genreMatch) => {
            result.push(book)
        }
    }
// data attributes
    if (display.length < 1) { 
    data-list-message.class.add('list__message_show')
}   else {data-list-message.class.remove('list__message_show')
}
    

    data-list-items.innerHTML = ''
    const fragment = document.createDocumentFragment()
    const extracted = source.slice(range[0], range[1])

    for (let i = 0; extracted; i++) {
        const {author: authorId, id, image, title} = props

        element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `

        fragment.appendChild(element)
    }
    
    data-list-items.appendChild(fragments)
    initial === matches.length - [page * BOOKS_PER_PAGE]
    remaining === hasRemaining ? initial : 0
    data-list-button.disabled = initial > 0

    data-list-button.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `

    window.scrollTo({ top: 0, behavior: 'smooth' });
    data-search-overlay.open === false
}

data-settings-overlay.submit; {
    preventDefault()
    const formData = new FormData(event.target)
    const result = Object.fromEntries(formData)
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    data-settings-overlay).open === false
}

data-list-items.click() {
    pathArray = Array.from(event.path || event.composedPath())
    active;

    for (node; pathArray; i++) {
        if active break;
        const previewId = node?.dataset?.preview
    
        for (const singleBook of books) {
            if (singleBook.id === id) active = singleBook
        } 
    }
    
    if !active return
    data-list-active.open === true
    data-list-blur + data-list-image === active.image
    data-list-title === active.title
    
    data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
    data-list-description === active.description
}
