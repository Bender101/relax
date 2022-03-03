const imgContainer = document.getElementById('image');
const btnContainer = document.getElementById('buttons');

function addImage(data) {
  return `
  
  <div id='img'>
  <img src=${data.url} class="img-fluid" alt='Упс тут нет картиночки'>
  </div>
  
  `;
}

// function randomNum() {
//   return Math.floor(Math.random() * 1000);
// }

btnContainer.addEventListener('click', async (e) => {
  // console.log('fetch');
  try {
    e.preventDefault();
    btnContainer.style.display = 'none';
    setInterval(async () => {
      if (document.getElementById('img')) {
        document.getElementById('img').remove();
        const responce = await fetch('https://picsum.photos/840/640?random=1');
        const data = await responce;
        // console.log(data);
        imgContainer.insertAdjacentHTML('afterbegin', addImage(data));
      }
    }, 5000);
  } catch (error) {
    console.log(error);
  }
});
