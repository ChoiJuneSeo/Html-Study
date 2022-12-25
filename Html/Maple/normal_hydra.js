let norm_plus = document.querySelector("#norm_plus");
let norm_minus = document.querySelector("#norm_minus");
let norm_result = document.querySelector("#norm_result");
let total = document.querySelector('.total');
let n_i = 0;

norm_plus.addEventListener("click", function(event) {
  n_i++;
  norm_result.textContent = n_i;
  total.textContent = n_i + r_i;
})

norm_minus.addEventListener("click", function(event){
  n_i--;
  norm_result.textContent = n_i;
  total.textContent = n_i + r_i;

})

let rare_plus = document.querySelector("#rare_plus");
let rare_minus = document.querySelector("#rare_minus");
let rare_result = document.querySelector("#rare_result");
let r_i = 0;

rare_plus.addEventListener("click", function(event) {
  r_i++
  rare_result.textContent = r_i;
  total.textContent = n_i + r_i;
})

rare_minus.addEventListener("click", function(event){
  r_i--
  rare_result.textContent = r_i;
  total.textContent = n_i + r_i;
})
