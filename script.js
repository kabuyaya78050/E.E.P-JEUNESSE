function confirmerParticipation() {

    const numero = "243839835126";


    const message =
        "Bonjour 🙏🏽, je confirme ma participation à la journée spéciale « Une Jeunesse de Qualité » qui aura lieu le samedi 25 juillet 2026 de 16h30 à 19h30 à l'Assemblée El-Bethel.";


    const lienWhatsApp =
        "https://wa.me/" +
        numero +
        "?text=" +
        encodeURIComponent(message);


    window.open(lienWhatsApp, "_blank");

}