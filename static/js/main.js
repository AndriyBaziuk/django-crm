// Navbar
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenuOpenIcon = document.getElementById("mobile-menu-open-icon");
const mobileMenuCloseIcon = document.getElementById("mobile-menu-close-icon");

mobileMenuButton.onclick = () => {
    mobileMenuOpenIcon.classList.toggle("hidden");
    mobileMenuCloseIcon.classList.toggle("hidden");
    mobileMenu.classList.toggle("hidden");
};

const userMenu = document.getElementById("user-menu");
const UserMenuButton = document.getElementById("user-menu-button");

UserMenuButton.onclick = () => {
    userMenu.classList.toggle("hidden");
};

UserMenuButton.onblur = () => {
    userMenu.classList.add("hidden")
};
