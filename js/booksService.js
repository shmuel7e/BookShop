var gBooks, gCurrPage = 0; gBooksOnPage = 5, gSortBy = '', gCurrBook = null;

function createBooks() {
    gBooks = [];
    gBooks.push(createBook('The Woodlanders', 'Thomas Hardy', 72.99, 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389977312l/341281.jpg'));
    gBooks.push(createBook('Tuesdays With Morrie', 'Mitch Albom', 40.25, 'https://prodimage.images-bn.com/pimages/9780385496490_p0_v2_s600x595.jpg'));
    gBooks.push(createBook('Why I Write', 'George Orwell', 100, 'https://bearskinblog.files.wordpress.com/2018/05/why-i-write.jpg'));
    gBooks.push(createBook('Sleeping Where I Fall', 'Peter Coyote', 59.99, 'https://images-na.ssl-images-amazon.com/images/I/51NephScNzL._SY346_.jpg'));
}

function createBook(title, author, price, imgURL, rate) {
    return {
        title,
        author,
        price,
        imgURL,
        rate,
        id: getRandomID()
    }

}


function deleteBook(bookID) {
    var bookIndex = getBookIndexByID(bookID)
    gBooks.splice(bookIndex, 1);
}

function addBook(newTitle, newAuthor, newPrice, newImgURL) {
    var newBook = createBook(newTitle, newAuthor, newPrice, newImgURL);
    gBooks.push(newBook);
}

function updateBook(currBook, updatedPrice, updatedImgURL) {
    currBook.price = updatedPrice;
    currBook.imgURL = updatedImgURL;
}

function getBooksToRender() {
    saveToStorage('gBooks', gBooks);
    var sortedBooks = gBooks.sort(function (book1, book2) {
        return book1[gSortBy] > book2[gSortBy] ? -1 :
            (book1[gSortBy] < book2[gSortBy] ? 1 : 0)
    })

    var startAt = gCurrPage * gBooksOnPage;
    return sortedBooks.slice(startAt, startAt + gBooksOnPage);
}


function setSortBy(sortBy) {
    gSortBy = sortBy;
}

function goToNextPage() {
    if ((gCurrPage + 1) * gBooksOnPage < gBooks.length) gCurrPage++;
}

function goToPrevPage() {
    if (gCurrPage !== 0) gCurrPage--;
}

function getBookIndexByID(bookID) {
    return gBooks.findIndex(function (book) {
        return book.id === bookID
    })
}

function setCurrBookRate(rate) {
    gCurrBook.rate = rate;
}

function setCurrBook(book) {
    gCurrBook = book;
}

function getBookByID(bookID) {
    var book = gBooks.find(function (book) {
        return book.id === bookID
    });
    return book;
}

function loadData() {
    if (localStorage.getItem("gBooks")) gBooks = loadFromStorage('gBooks', []);
    else createBooks();
}


