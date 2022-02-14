document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById("nav-menu-button")
    const phoneMenu = document.getElementById("phone-menu")
    let menuOpen = false

    menuButton.addEventListener('click', () => {
        menuOpen = !menuOpen
        if (menuOpen) {
            phoneMenu.classList = "open"
        } else {
            phoneMenu.classList = "closed"
        }
    })
})