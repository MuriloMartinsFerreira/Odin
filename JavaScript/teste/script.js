/**
 * Lógica da Biblioteca Pessoal
 * Seguindo padrões de Classes ES6
 */

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.id = crypto.randomUUID();
    }

    toggleStatus() {
        this.isRead = !this.isRead;
    }
}

class LibraryController {
    constructor() {
        this.myLibrary = [];
        this.setupEventListeners();
    }

    setupEventListeners() {
        const btnNewBook = document.getElementById("novoLivro");
        const dialog = document.getElementById("book-dialog");
        const cancel = document.getElementById("cancel");
        const form = document.getElementById("form-dialog");

        btnNewBook.addEventListener('click', () => dialog.showModal());
        cancel.addEventListener('click', () => dialog.close());

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addBook(
                form.nome.value,
                form.autor.value,
                form.pages.value,
                form.lido.checked
            );
            form.reset();
            dialog.close();
        });
    }

    addBook(title, author, pages, isRead) {
        const newBook = new Book(title, author, pages, isRead);
        this.myLibrary.push(newBook);
        this.render();
    }

    removeBook(id) {
        this.myLibrary = this.myLibrary.filter(book => book.id !== id);
        this.render();
    }

    toggleBookStatus(id) {
        const book = this.myLibrary.find(b => b.id === id);
        if (book) book.toggleStatus();
        this.render();
    }

    createBookCard(book) {
        const card = document.createElement("article");
        card.classList.add("card");

        const statusText = book.isRead ? "Lido" : "Não lido";
        const statusClass = book.isRead ? "read" : "unread";

        card.innerHTML = `
            <div class="card-title">${book.title}</div>
            <div class="card-info">
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Páginas:</strong> ${book.pages}</p>
                <span class="status-badge ${statusClass}" data-id="${book.id}">
                    ${statusText}
                </span>
            </div>
            <button class="btn-delete" data-id="${book.id}">Remover Livro</button>
        `;

        // Evento para alternar status (Read/Unread)
        card.querySelector('.status-badge').addEventListener('click', () => {
            this.toggleBookStatus(book.id);
        });

        // Evento para deletar
        card.querySelector('.btn-delete').addEventListener('click', () => {
            this.removeBook(book.id);
        });

        return card;
    }

    render() {
        const shelf = document.getElementById("estante");
        shelf.innerHTML = "";

        this.myLibrary.forEach(book => {
            shelf.appendChild(this.createBookCard(book));
        });
    }
}

// Inicializa a aplicação
const myLibraryApp = new LibraryController();