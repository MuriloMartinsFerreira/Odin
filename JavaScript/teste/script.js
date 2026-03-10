const dialog = document.getElementById('book-dialog');
const openBtn = document.getElementById('new-book-btn');
const cancelBtn = document.getElementById('cancel-dialog');

openBtn?.addEventListener('click', () => dialog?.showModal());
cancelBtn?.addEventListener('click', () => dialog?.close());
