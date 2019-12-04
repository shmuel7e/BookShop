function init() {
    loadData();
    renderBooks();
    onSwipe();
}

function renderBooks() {
    var books = getBooksToRender();
    var trs = books.map(function (book) {
        return `<tr data-id="${book.id}">
                <td>${book.id} </td> 
                <td class="min-td"> ${book.title} </td> 
                <td class="min-td"> ${book.author} </td>
                <td class="min-td-price"> ${book.price}$ </td> 
                <td> <button type="button" class="btn btn-primary" onclick="onShowDetails('${book.id}')" data-trans="read">Read</button> </td>
                <td> <button type="button" class="btn btn-warning" onclick="onNewUpdateBook('${book.id}')"data-trans="update">Update</button> </td>
                <td> <button type="button" class="btn btn-danger" onclick="onDelete('${book.id}')"data-trans="delete">Delete </button> </td>
                </tr>`;


    })


    document.querySelector('.books-table').innerHTML = trs.join('');
}

function onDelete(bookID) {
    deleteBook(bookID);
    renderBooks();
}


function onAddNewBook() {
    document.querySelector('.add-book-modal').hidden = false;
}
function onNewUpdateBook(bookID) {
    document.querySelector('.update-book-modal').hidden = false;
    var currBookIndex = getBookIndexByID(bookID);
    gCurrBook = gBooks[currBookIndex];
}

function onCloseModal() {
    document.querySelector('.add-book-modal').hidden = true;
    document.querySelector('.update-book-modal').hidden = true;
    document.querySelector('.read-book-modal').hidden = true;

}

function onAddBook() {
    var newTitle = document.querySelector('.book-title').value;
    var newAuthor = document.querySelector('.author').value;
    var newPrice = document.querySelector('.price').value;
    var newImgURL = document.querySelector('.bookIMG').value;
    addBook(newTitle, newAuthor, newPrice, newImgURL);
    document.querySelector('.add-book-modal').hidden = true;
    renderBooks();

}

function onUpdateBook() {
    var updatedPrice = document.querySelector('.price-update').value;
    var updatedImgURL = document.querySelector('.bookIMG-update').value;
    updateBook(gCurrBook, updatedPrice, updatedImgURL);
    document.querySelector('.update-book-modal').hidden = true;
    renderBooks();
}

function onSort(elSortSelect) {
    var sortBy = elSortSelect;
    setSortBy(sortBy);
    renderBooks();
}

function onRate(elRate) {
    var rate = elRate.value;
    setCurrBookRate(rate);
}


function rateToIndexMap(rate) {
    switch (rate) {
        case 'one-star': return 1;
        case 'two-stars': return 2;
        case 'three-stars': return 3;
        case 'four-stars': return 4;
        case 'five-stars': return 5;
        default: return 0;
    }
}

function onNextPage() {
    goToNextPage();
    renderBooks();
}

function onPrevPage() {
    goToPrevPage();
    renderBooks();
}

function onShowDetails(bookID) {
    var book = getBookByID(bookID);
    setCurrBook(book);
    document.querySelector('.show-title').innerText = book.title;
    document.querySelector('.show-author').innerText = book.author;
    document.querySelector('.show-price').innerText = book.price + '$';
    document.querySelector('.show-img').innerHTML = `<img src =" ${book.imgURL}" alt="title" height="200px"> </img>`;
    document.querySelector('.show-rate').selectedIndex = rateToIndexMap(book.rate);
    document.querySelector('.read-book-modal').hidden = false;
}

function onSetLang(ellang) {
    var lang = ellang.value;
    setLang(lang);
    renderBooks();
    doTrans();

    if (lang === 'he') {
        document.querySelector('body').style['direction'] = 'rtl'
    }
    else {
        document.querySelector('body').style['direction'] = 'ltr'

    }
}

function onSwipe() {
    const elBooksTable = document.querySelector('.books-table');
    const hmrBooksTable = new Hammer(elBooksTable);
    console.log(hmrBooksTable);

    hmrBooksTable.on('panleft panright', (ev) => {
        if (ev.target.nodeName !== 'TD') return;
        var bookId = ((ev.target.closest('[data-id]').dataset.id));
        console.log(ev.type);
        console.log(bookId);
        switch (ev.type) {
            case 'panright': onDelete(bookId);
                break;
            case 'panleft': onShowDetails(bookId);
                break;
            default:
                break;
        }
        hmrBooksTable.stop(); // stops the event
    });
}
onSwipe()