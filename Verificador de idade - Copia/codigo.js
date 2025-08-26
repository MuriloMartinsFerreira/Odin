function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        res.innerHTML = "[Erro] Verifique os dados novamente"
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','bm.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jm.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','am.png')
            } else {
                //velho
                img.setAttribute('src','vm.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','bf.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jf.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','af.png')
            } else {
                //velho
                img.setAttribute('src','vf.png')
            }
        }
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos'
        res.appendChild(img)
    }

}