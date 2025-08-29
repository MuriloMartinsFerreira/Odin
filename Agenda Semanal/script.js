function registrar() {
    let textarea = document.getElementById("atividade")
    let texto = textarea.value
    let marcados = document.querySelectorAll("input[name='dia']:checked")
    let dias = Array.from(marcados).map(c => Number(c.value));

    let tabela = document.getElementById("agenda")

    if (dias.length == 0) {
        return
    }
    if (texto.length == 0) {
        return
    }

    dias.forEach(dia => {
        let diaIndex = dia - 1 // coluna correspondente

        // percorre as linhas procurando a primeira célula vazia na coluna
        for (let i = 1; i < tabela.rows.length; i++) {
            let celula = tabela.rows[i].cells[diaIndex]
            if (celula.innerHTML === '') {
                celula.innerHTML = texto
                break; // para ao preencher a primeira célula vazia
            }
        }
    })
    textarea.value = '';
    marcados.forEach(c => c.checked = false);
}