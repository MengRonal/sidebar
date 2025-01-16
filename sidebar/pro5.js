const serviceLink = document.querySelector(".service_link");
serviceLink.addEventListener("click", function (e) {
  e.preventDefault();
});
const portfulioLInk = document.querySelector(".portfolios_link");
portfulioLInk.addEventListener("click", function (e) {
  e.preventDefault();
});
const service = document.querySelector(".Service");
service.addEventListener("click", function () {
  service.classList.toggle("active");
  portfulio.classList.remove("active");
});
const portfulio = document.querySelector(".portfolios");
portfulio.addEventListener("click", function () {
  portfulio.classList.toggle("active");
  service.classList.remove("active");
});

const hambuger = document.querySelector(".hamburgar_btn");
const togglee = document.querySelector(".toggle_btn");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

togglee.addEventListener("click", function (e) {
  e.preventDefault();
  togglee.classList.toggle("active");
  hambuger.classList.toggle("active");
  sidebar.classList.toggle("active");
  content.classList.toggle("active");
});
// document.addEventListener("click", function (e) {
//   if (!e.target.closest(".hamburgar_btn")) {
//     togglee.classList.remove("active");
//     hambuger.classList.remove("active");
//     content.classList.remove("active");
//     service.classList.remove("active");
//     portfulio.classList.remove("active");
//   }
// });

const btntop = document.querySelector(".btn_top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) btntop.classList.add("active");
  else btntop.classList.remove("active");
});
btntop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
