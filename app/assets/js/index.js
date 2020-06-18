window.onload = () => {
  alert(
    "Desculpe-me, ainda não está pronto!!\n" +
      "\n Amanhã terei algo mais para te mostrar!! UM ABRAÇÃO!!"
  );
};

window.onscroll = () => {
  let navbar = document.getElementById("ld-header");

  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    navbar.style.backgroundColor = "#1E1E25";
  } else {
    navbar.style.backgroundColor = "#00000000";
  }
};

function clicked() {
  let navItem = document.getElementsByClassName("nav-item");
  let section = [0];

  console.log(navItem);
}
document.body;
