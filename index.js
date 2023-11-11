const prices = [8, 12, 16, 24, 36];
const views = ["10K", "50K", "100K", "500K", "1M"];

const form = document.getElementById("form__price");

form.addEventListener("input", (event) => {
  const discount = form.querySelector("#yearly").checked;
  const value = form.querySelector("#amount").value;

  form.querySelector("#price").textContent = `$${(
    prices[value] * (discount ? 0.75 : 1)
  ).toFixed(2)}`;

  form.querySelector("#pageviews").textContent = views[value];
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// Slider fill
const slider = document.getElementById("amount");
slider.addEventListener("input", (event) => {
  slider.setAttribute(
    "style",
    `--percentage:${(event.target.value / 4) * 100}% !important`
  );
});
