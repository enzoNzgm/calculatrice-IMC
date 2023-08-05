let poids = document.getElementById("poids")
let taille = document.getElementById("taille")
let boutonCalculer = document.querySelector('.btn__calcul')

boutonCalculer.addEventListener('click', () => {
    const resultat = poids.value / (taille.value / 100) ** 2
    let afficherResultat = document.querySelector(".resultat span")
    if (poids.value === '' || taille.value === '') {
        alert('veuillez entrez les deux valeurs !!!')
    } else if (poids.value <= 0 || taille.value <= 0) {
        alert("Entrez des valeurs valide !!!")
    } else {
        if (resultat < 18.5) {
            afficherResultat.style.color = "red"
        } else if (resultat > 18.5 && resultat < 24.9) {
            afficherResultat.style.color = "green"
        } else if (resultat > 25 && resultat < 29.9) {
            afficherResultat.style.color = "orange"
        } else {
            afficherResultat.style.color = "red"
        }
        afficherResultat.innerText = resultat.toFixed(1)
    }

})