function Contar() {
    var inicio = document.getElementById("inicio").value;
    var fim = document.getElementById("fim").value;
    var salto = document.getElementById("salto").value;
    var res = document.getElementById("res");
    var resposta = "";

    if (inicio.length == 0 || fim.length == 0 || salto.length == 0) {
        res.innerHTML = "ERRO: por favor preencha todos os campos";
    } else {
        inicio = Number(inicio);
        fim = Number(fim);
        salto = Number(salto);

        if (salto <= 0) {
            res.innerHTML = "ERRO: o salto não pode ser 0 ou negativo";
            return;
        }

        if (inicio < fim) {
            for (var i = inicio; i < fim; i += salto) {
                resposta += i + " 👉 ";
            }
        }

        if (inicio > fim) {
             for (var i = inicio; i > fim; i -= salto) {
                resposta += i + " 👉 ";
            }
        }
        
        resposta += "🏁 FIM";
        res.innerHTML = resposta;
    }
}