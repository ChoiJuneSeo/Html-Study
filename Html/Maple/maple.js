let num_all_hy = document.querySelector('.num_all_hy');
let attack=document.querySelector(".attack_hy");
let attack_hy= 0;

let upPlHy=document.querySelector("#up_hy_pl");
let upMiHy=document.querySelector("#up_hy_mi");
let upgrade_hy=document.querySelector(".upgrade_hy");
let upgrade_hy2=document.querySelector(".upgrade_hy2");
let hydraUp=0;

upPlHy.addEventListener("click", function(event) {
  hydraUp++;
  upgrade_hy.textContent = hydraUp;
  upgrade_hy2.textContent = hydraUp;
  attack.textContent= attack_hy * (hydraUp+1);
})
upMiHy.addEventListener("click", function(event){
  hydraUp--;
  upgrade_hy.textContent = hydraUp;
  upgrade_hy2.textContent = hydraUp;
  attack.textContent= attack_hy * (hydraUp+1);
})

let norm_hy_pl = document.querySelector("#norm_hy_pl");
let norm_hy_mi = document.querySelector("#norm_hy_mi");
let num_norm_hy = document.querySelector("#num_norm_hy");
let n_i = 0;

norm_hy_pl.addEventListener("click", function(event) {
  n_i++;
  num_norm_hy.textContent = n_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy+=3;
  document.querySelector('.attack_hy').textContent=attack_hy;
})
norm_hy_mi.addEventListener("click", function(event){
  n_i--;
  num_norm_hy.textContent = n_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy-=3;
  document.querySelector('.attack_hy').textContent=attack_hy;

})

let rare_hy_pl = document.querySelector("#rare_hy_pl");
let rare_hy_mi = document.querySelector("#rare_hy_mi");
let num_rare_hy = document.querySelector("#num_rare_hy");
let r_i = 0;

rare_hy_pl.addEventListener("click", function(event) {
  r_i++
  num_rare_hy.textContent = r_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy+=5;
  document.querySelector('.attack_hy').textContent=attack_hy;
})
rare_hy_mi.addEventListener("click", function(event){
  r_i--
  num_rare_hy.textContent = r_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy-=5;
  document.querySelector('.attack_hy').textContent=attack_hy;
})

let anc_hy_pl = document.querySelector("#anc_hy_pl");
let anc_hy_mi = document.querySelector("#anc_hy_mi");
let num_anc_hy = document.querySelector("#num_anc_hy");
let a_i = 0;

anc_hy_pl.addEventListener("click", function(event) {
  a_i++
  num_anc_hy.textContent = a_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy+=7;
  document.querySelector('.attack_hy').textContent=attack_hy;
})
anc_hy_mi.addEventListener("click", function(event){
  a_i--
  num_anc_hy.textContent = r_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy-=7;
  document.querySelector('.attack_hy').textContent=attack_hy;
})

let relic_hy_pl = document.querySelector("#relic_hy_pl");
let relic_hy_mi = document.querySelector("#relic_hy_mi");
let num_relic_hy = document.querySelector("#num_relic_hy");
let re_i = 0;

relic_hy_pl.addEventListener("click", function(event) {
  re_i++
  num_relic_hy.textContent = re_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy+=10;
  document.querySelector('.attack_hy').textContent=attack_hy;
})
relic_hy_mi.addEventListener("click", function(event){
  re_i--
  num_relic_hy.textContent = re_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy-=10;
  document.querySelector('.attack_hy').textContent=attack_hy;
})

let epic_hy_pl = document.querySelector("#epic_hy_pl");
let epic_hy_mi = document.querySelector("#epic_hy_mi");
let num_epic_hy = document.querySelector("#num_epic_hy");
let e_i = 0;

epic_hy_pl.addEventListener("click", function(event) {
  e_i++
  num_epic_hy.textContent = e_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy+=13;
  document.querySelector('.attack_hy').textContent=attack_hy;
})
epic_hy_mi.addEventListener("click", function(event){
  e_i--
  num_epic_hy.textContent = e_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy-=13;
  document.querySelector('.attack_hy').textContent=attack_hy;
})

let legend_hy_pl = document.querySelector("#legend_hy_pl");
let legend_hy_mi = document.querySelector("#legend_hy_mi");
let num_legend_hy = document.querySelector("#num_legend_hy");
let l_i = 0;

legend_hy_pl.addEventListener("click", function(event) {
  l_i++
  num_legend_hy.textContent = l_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy+=19;
  document.querySelector('.attack_hy').textContent=attack_hy;
})
legend_hy_mi.addEventListener("click", function(event){
  l_i--
  num_legend_hy.textContent = l_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy-=19;
  document.querySelector('.attack_hy').textContent=attack_hy;
})

let uniq_hy_pl = document.querySelector("#uniq_hy_pl");
let uniq_hy_mi = document.querySelector("#uniq_hy_mi");
let num_uniq_hy = document.querySelector("#num_uniq_hy");
let u_i = 0;

uniq_hy_pl.addEventListener("click", function(event) {
  u_i++
  num_uniq_hy.textContent = u_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy+=6;
  document.querySelector('.attack_hy').textContent=attack_hy;
})
uniq_hy_mi.addEventListener("click", function(event){
  u_i--
  num_uniq_hy.textContent = u_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy-=6;
  document.querySelector('.attack_hy').textContent=attack_hy;
})

let god_hy_pl = document.querySelector("#god_hy_pl");
let god_hy_mi = document.querySelector("#god_hy_mi");
let num_god_hy = document.querySelector("#num_god_hy");
let g_i = 0;

god_hy_pl.addEventListener("click", function(event) {
  g_i++
  num_god_hy.textContent = g_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy+=28;
  document.querySelector('.attack_hy').textContent=attack_hy;
})
god_hy_mi.addEventListener("click", function(event){
  g_i--
  num_god_hy.textContent = g_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy-=28;
  document.querySelector('.attack_hy').textContent=attack_hy;
})

let ult_hy_pl = document.querySelector("#ult_hy_pl");
let ult_hy_mi = document.querySelector("#ult_hy_mi");
let num_ult_hy = document.querySelector("#num_ult_hy");
let ul_i = 0;

ult_hy_pl.addEventListener("click", function(event) {
  ul_i++
  num_ult_hy.textContent = ul_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy+=36;
  document.querySelector('.attack_hy').textContent=attack_hy;
})
ult_hy_mi.addEventListener("click", function(event){
  ul_i--
  num_ult_hy.textContent = ul_i;
  num_all_hy.textContent = n_i + r_i + a_i + +re_i + e_i + l_i + u_i + g_i + ul_i;
  attack_hy-=36;
  document.querySelector('.attack_hy').textContent=attack_hy;
})