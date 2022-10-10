var rates = document.querySelectorAll(".item");
var submit = document.querySelector(".btn");
var grid = document.querySelector(".grid");
var thankyou = document.querySelector(".thankyou");
var notifi = document.querySelector(".notifi");
rates.forEach((item) => {
  item.addEventListener("click", function (e) {
    handleEvent(e);
    getValue(e);
  });
});

function getValue(e) {
  var value = e.target.dataset.value;
  notifi.innerHTML = `You selected ${value} out of 5`;
  console.log(notifi);
}

function handleEvent(e) {
  rates.forEach((el) => el.classList.remove("selected"));
  e.target.classList.add("selected");
}
submit.addEventListener("click", function (e) {
  grid.style.display = "none";
  thankyou.style.display = "block";
});
