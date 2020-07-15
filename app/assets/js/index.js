window.onscroll = () => {
  let navbar = document.getElementById("ld-header");

  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    navbar.style.backgroundColor = "#1E1E25";
  } else {
    navbar.style.backgroundColor = "#00000000";
  }
};
