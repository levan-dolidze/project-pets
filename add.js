const addBtn = document.getElementById('addBtn')
const titleInput = document.getElementById('title');
const imageInput = document.getElementById('image');
const description = document.getElementById('description');
const contactPersonName = document.getElementById('contactPersonName');
const contactPersonNumber = document.getElementById('contactPersonNumber');
const result=document.querySelector(".result")

localStorage.setItem('hello','2');

const statements =[];


addBtn.addEventListener('click', ()=>{
const newStatement= new Statement(titleInput.value,contactPersonName.value,contactPersonNumber.value,null,description.value,null,null,imageInput.value)
statements.push(newStatement)

console.log(newStatement)


// window.location.replace('index.html');

});




// image loader
const previewContainer=document.getElementById('imagePreview');
const previewImage=previewContainer.querySelector(".image-preview__image");
const previewDefaultText=previewContainer.querySelector(".image-preview__default-text");

imageInput.addEventListener("change",function(){
const file=this.files[0];
if(file){
    const reader =new FileReader();
    previewDefaultText.style.display="none";
    previewImage.style.display="block";

reader.addEventListener("load",function(){
   
    previewImage.setAttribute("src",this.result);
})

reader.readAsDataURL(file);


}else{
    previewDefaultText.style.display=null;
    previewImage.style.display=null;
    previewImage.setAttribute("src","");

}

});
