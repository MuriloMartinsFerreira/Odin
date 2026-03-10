const newbook = document.getElementById("novoLivro");
const dialog = document.getElementById("book-dialog");
const cancel = document.getElementById("cancel");
const form = document.getElementById("form-dialog");

newbook.addEventListener('click', () => dialog.showModal());
cancel.addEventListener('click', () => dialog.close());

form.addEventListener('submit', (event) => {

    event.preventDefault(); // impede recarregar a página

    let nome = form.nome.value;
    let autor = form.autor.value;
    let pages = form.pages.value;
    addBookToLibrary(nome, autor, pages);
    dialog.close();
});

const myLibrary = [];

function Book(nome, autor, pages) {
    this.nome = nome;
    this.autor = autor;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(nome, autor, pages) {

    let newbook = new Book(nome, autor, pages);
    myLibrary.push(newbook);
    render();
}

function render() {
    const estante = document.getElementById("estante");
    estante.innerHTML = "";

    myLibrary.forEach((livro, index) => {

        let card = document.createElement("div");
        card.classList.add("card");
        card.id = livro.id;

        card.innerHTML = `<div class="titulo">${livro.nome}</div>
        <div>
        <p>${livro.autor}</p>
        <p>Paginas: ${livro.pages}</p>
        </div>
        <button class="excluir" data-index="${index}">Excluir</button>`;
        estante.appendChild(card);

        let excluir = card.querySelector(".excluir")
        excluir.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            render();
        })
    })
}

