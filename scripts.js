//  start off by declaring all const to be used throughout the script in the global scope
// 
const matches = books
const page = 1;
import{
    BOOKS_PER_PAGE, author, genres, books, 
}from "./data"
// fetchs files from the data.js file to be used in the script.js scripts
// might improve performance of webpage loadtimes as it runs alongside the html and runs the data.js file key data points in the script.js file

if (!books && !Array.isArray(books)) throw new Error('Source required') 
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

console.log(typeof(matches))
// console.log checks whether the typeof(matches) is actually a string, array

// light and dark mode rgb ranges to be used by the user depending on preference
day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

const previewFragment = document.createDocumentFragment();
const extractedSearch = books.slice(0, 36);
const [author, id, image, title] = matches


// for the "for" loop set the end of loop to 36 so it stops showing books when it reachs "extracted = 36"
// make {author, image, title, id} into an array so that they are easier to access
for (let i = 0; i <= extractedBooks ; i++) {
    const preview = {
        author,
        id,
        image,
        title,
    }

    previewFragment.appendChild(preview);
    return previewFragment;
}

data-list-items.appendChild(fragment)
// creates a option button in the html with a nested object giving value an assignment of "any" or "all genres"
const genres = document.createDocumentFragment()
const element = document.createElement('option')
  element.value = 'any'
  element = 'All Genres'
  genres.appendChild(element)
// for loop to dislay a list of values(books/any-genres) to output to the element
// how much should be displayed in the html/webpage.
// sets the amount of times the for loop should run according to the amount of entries that should be presented
for (let [id, name] = 0; [] <= Object.entries(genres); i++) {
    document.createElement('option')
    element.value = value
    element.innerText = text
    genres.appendChild(element)
}
// sends the data-key searchs to the DOM? for genres in the data.js
data-search-genres.appendChild(genres)

const authors = document.createDocumentFragment()
element = document.createElement('option')
element.value = 'any'
element.innerText = 'All Authors'
authors.appendChild(element)
// sets the loop limit for how many author entries should be displayed on the webpage
// send the given amount to the element/ DOM?
for (let [id, name] = 0 ; [] <= Object.entries(authors); id++) {
    document.createElement('option')
    element.value = value
    element = text
    authors.appendChild(element)
}

data-search-authors.appendChild(authors)

data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' || 'day'

// do you make this into a object to set light and dark theme?
documentElement.style.setProperty('--color-dark', css[v].dark);
documentElement.style.setProperty('--color-light', css[v].light);
const dataListButton = document.querrySelector(`[data-list-button]`)
console.log(matches.length)
//  = "Show more (books.length - BOOKS_PER_PAGE)"

if (data-list-button.disabled) { !(matches.length - [page * BOOKS_PER_PAGE] > 0)
    // else {(data-list-button.enabled)
    // }

data-list-button.innerHTML = /* html */ [
    '<span>Show more</span>',
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
]
}

// listeners,
//  should i add addeventlisteners here so that the js fires to the html whenever a button is pressed
// for the data-list?
// do we add an event listener to the list button within the css or the html
data-search-cancel.click(document.querySelector(`[data-search-overlay]`).open === false )
data-settings-cancel.click(document.querySelector(`[data-settings-overlay]`).open === false)
data-settings-form.submit(document.querySelector(`[actions.settings.submit]`))
data-list-close.click(document.querySelector(`[data-list-active]`).open === false)

// function used to set book previews to a given value for each page loaded to be ran each time button is clicked
data-list-button.click() => {
    document.querySelector(`[data-list-items]`).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE))
    actions.list.updateRemaining()
    page = page + 1
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
