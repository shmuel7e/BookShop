'use strict'
var gTrans = {
    title: {
        en: 'Shmuel\'s Book Shop',
        he: 'חנות הספרים של שמואל :)',
        es: 'librería de shmuel'
    },
    tableId: {
        en: 'ID',
        es: 'I.D',
        he: 'קוד'
    },
    tableTitle: {
        en: 'Title',
        es: 'Título',
        he: 'שם הספר'
    },
    tableAuthor: {
        en: 'Author',
        es: 'Autor',
        he: 'סופר'
    },
    tablePrice: {
        en: 'Price',
        es: 'Precio',
        he: 'מחיר'
    },
    tableActions: {
        en: 'Actions',
        es: 'Comportamiento',
        he: 'פעולות'
    },
    addBook: {
        en: 'Add Book',
        es: 'Agregar Libro',
        he: 'הוסף ספר'
    },
    update: {
        en: 'Update',
        es: 'Actualizar',
        he: 'עדכן'
    },
    read: {
        en: 'Read',
        es: 'Leer',
        he: 'קרא'
    },
    delete: {
        en: 'Delete',
        es: 'Borrar',
        he: 'מחק'
    },
    prevPage: {
        en: 'Previous Page',
        es: 'Pagina Anterior',
        he: 'עמוד קודם'
    },
    nextPage: {
        en: 'Next Page',
        es: 'Siguiente Página',
        he: 'עמוד הבא'
    },
    rateMe: {
        en: 'Rate Me',
        es: 'Califícame',
        he: 'דרג אותי'
    },
    bookPrice: {
        en: 'Price',
        es: 'Precio',
        he: 'מחיר'
    },
    bookDetails: {
        en: 'Book Details',
        es: 'Detalles del libro',
        he: 'פרטי הספר'
    },
    pricePlaceholder: {
        en: 'Price',
        es: 'Precio',
        he: 'מחיר'
    },
    urlPlaceholder: {
        en: 'Image URL',
        es: 'Imagen URL',
        he: 'לינק לתמונת הספר',
    },
    updateButton: {
        en: 'Update Book',
        es: 'Actualizar de Libro',
        he: 'עדכן ספר',
    },
    h3BookDetails: {
        en: 'Book Details:',
        es: 'Detalles Del Libro:',
        he: ':פרטי הספר'
    },
    
}

var gCurrLang = 'en';

function doTrans() {//<option value="all" data-trans="filter-all">All</option>
    var els = document.querySelectorAll('[data-trans]')

    els.forEach(function (element) {
        var transKey = element.dataset.trans;
        var translation = getTrans(transKey);

        // Translating is actually complex and needs a library
        if (element.nodeName === 'INPUT') {
            element.setAttribute('placeholder', translation);
        } else {
            element.innerText = translation;
        }
    });
}


function getTrans(transKey) {
    return gTrans[transKey][gCurrLang];
}


function setLang(lang) {
    gCurrLang = lang;
}
