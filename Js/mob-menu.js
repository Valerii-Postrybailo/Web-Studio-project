(() => {
    const refs = {
        openMenuBtn: document.querySelector(".menu-open-btn"),
        closeMenuBtn: document.querySelector(".menu-close-btn"),
        menu: document.querySelector("[data-menu]"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        document.body.classList.toggle("modal-open");
        refs.menu.classList.toggle("is-hidden");
    }
})();