const handleSearchcancel = () => {
    event.preventDefault();
    data.search.overlay.showModal();
    data.search.cancel.addEventListener('click',  () => {
    data.search.overlay.close();
    })
}



data-search-cancel.click(document.querySelector(`[data-search-overlay]`).open === false )
data.search.cancel.addEventListener('click', handleSearchcancel)


data-settings-cancel.click() { document.querySelector(`[data-settings-overlay]`).open === false }
data-settings-form.submit() { document.querySelector(`[actions.settings.submit]`) }
data-list-close.click() { document.querySelector(`[data-list-active]`).open === false }



