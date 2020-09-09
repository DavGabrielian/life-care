openMenu = () => {
  (document.getElementById("nav-menu").style.height = "350px") &&
    (document.getElementById("menu").style.display = "flex") &&
    (document.getElementById("menu").style.opacity = "1") &&
    (document.getElementById("close").style.display = "block") &&
    (document.getElementById("open").style.display = "none");
};

closeMenu = () => {
  (document.getElementById("nav-menu").style.height = "1px") &&
    (document.getElementById("menu").style.opacity = "0") &&
    (document.getElementById("menu").style.display = "none") &&
    (document.getElementById("open").style.display = "block") &&
    (document.getElementById("close").style.display = "none");
};
