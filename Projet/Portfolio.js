document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll('.scroll-wrapper');
    
    if (!wrappers.length) return console.error("Erreur : aucun élément .scroll-wrapper trouvé !");

    wrappers.forEach(wrapper => {
        const container = wrapper.querySelector('.container');
        if (!container) return console.error("Erreur : élément .container introuvable !");

        const scroll = (direction) => container.scrollBy({ left: direction * 400, behavior: 'smooth' });

        wrapper.querySelector(".arrow.right")?.addEventListener("click", () => scroll(1));
        wrapper.querySelector(".arrow.left")?.addEventListener("click", () => scroll(-1));
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 1100) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const url = card.getAttribute("data-url");
            if (url) {
                window.location.href = url; // Redirige vers la page correspondante
            }
        });
    });
});