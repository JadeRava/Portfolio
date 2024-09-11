const ball = document.querySelector(".toggle_ball");
const items = document.querySelectorAll(".container, .movie_list_title, .navbar_container, .sidebar, .left_menu_icon, .toggle, .footer, .footer_list, .copy");

ball.addEventListener("click", () => {
items.forEach(item => {
    item.classList.toggle("active")
  })

});