let cnt = 0;
const dec = document.getElementById('decrease');
const res = document.getElementById('reset');
const inc = document.getElementById('increase');
const value = document.querySelector("#value")



dec.addEventListener('click',  () => {
    cnt--;
    value.textContent = cnt;
})
inc.addEventListener('click', () => {
    cnt++;
    value.textContent = cnt;
})
res.addEventListener('click', () => {
    cnt = 0;
    value.textContent = cnt;
})