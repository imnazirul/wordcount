const textarea = document.querySelector("#textarea");
const total = document.querySelector(".total");
const remain = document.querySelector(".remain");

textarea.addEventListener("keyup", () => {
  showdata();
});

function showdata() {
  remain.innerText = textarea.getAttribute("maxlength") - textarea.value.length;

  total.innerHTML = textarea.value.length;
}

showdata();
