const addBtn = document.getElementById('addBtn');
const titleInput = document.getElementById('title');
const imageInput = document.getElementById('image');
const description = document.getElementById('description');
const contactPersonName = document.getElementById('contactPersonName');
const contactPersonNumber = document.getElementById('contactPersonNumber');
const search=document.getElementById("search-div")
const searchInput=document.getElementById("search-input")

// const newStatement = new Statement(titleInput.nodeValue, contactPersonName.value, contactPersonNumber.value, null, description.value, null, null, imageInput.value); 

localStorage.setItem('hello',"1");
const statements=JSON.parse(localStorage.getItem('statements'));
addBtn.addEventListener('click', () => {
    const newStatement = new Statement(titleInput.value, contactPersonName.value, contactPersonNumber.value, null, description.value, null, null, imageInput.value); 
   statements.push(newStatement);
    localStorage.setItem('statements', JSON.stringify(statements));
  
   
});





