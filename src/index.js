// 1. select the element
const btn = document.querySelector('#click-me');
// 2. add event listener
btn.addEventListener('click', (event) => {
  // 3. perform the behavior
  event.currentTarget.innerText = 'Loading';
});
