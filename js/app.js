document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handle);
  

});

const handle = function(event){
  event.preventDefault();
  const newList = document.createElement('li');
  newList.setAttribute('class', 'reading')
  const valueList = [event.target.title.value, event.target.author.value,  event.target.category.value]
  for (i=0; i<valueList.length; i++){
    const newPara = document.createElement('p');
    newPara.textContent = `${valueList[i]}`;
    
    
    newList.appendChild(newPara);
  }
  const list = document.querySelector('#reading-list');
  list.appendChild(newList);
  const form = document.querySelector('#new-item-form');
  form.reset();
}


// const newHead1 = document.createElement('h2');
//   newHead1.textContent = `${event.target.title.value}`;
//   console.dir(event)
//   newList.appendChild(newHead1);
//   const newHead2 = document.createElement('h3');
//   newHead2.textContent = `${event.target.author.value}`;
//   newList.appendChild(newHead2);
//   const newPara = document.createElement('p');
//   newPara.textContent = `${event.target.category.value}`;
//   newList.appendChild(newPara);
  // const list = document.querySelector('#reading-list');
  // list.appendChild(newList);