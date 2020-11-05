// class Statement {
// constructor(brend,size,price,code,image){
// this.brend=brend;
// this.size=size;
// this.price=price;
// this.code=code;
// this.image=image;

// }

// }

// const productList=document.querySelector('.product-list');

// const productBox=new Statement('flip',"8.2inx32.31in","230",'001',"flip.jpg");
// const productBox1=new Statement('flip',"8.2inx32.31in","230",'001',"flip.jpg");
// const productBox2=new Statement('flip',"8.2inx32.31in","230",'001',"flip.jpg");
// const productBox3=new Statement('flip',"8.2inx32.31in","230",'001',"flip.jpg");
// const productBox4=new Statement('flip',"8.2inx32.31in","230",'001',"flip.jpg");
// const productBox5=new Statement('flip',"8.2inx32.31in","230",'001',"flip.jpg");
// const productBox6=new Statement('flip',"8.2inx32.31in","230",'001',"flip.jpg");
// const productBox7=new Statement('flip',"8.2inx32.31in","230",'001',"flip.jpg");

// const prouctArr=[productBox,productBox1,productBox2,productBox3,productBox4,productBox5,productBox6,productBox7]

// const appendBox=(box)=>{
//     const skateBox=`
//     <div class="statement">
//     <p class="author-info">code: ${box.code}</p>
//     <img class="statement-img" src=${box.image} alt="">
//     <p class="description">${box.price} gel</p>
//     <p class="statement-title">${box.brend}</p>
//     <p class="author-info">size: ${box.size}</p>
   
// </div>`;
    
// productList.innerHTML += skateBox;
    
// }

// function loop(){


// for (let index = 0; index < prouctArr.length; index++) {
//     const ss=prouctArr[index]
//    appendBox(ss)
    
// }
// }
// loop()

// appendBox(prouctArr);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 2);

console.log(result);


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]




