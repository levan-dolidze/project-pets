const clearBtn=document.getElementById('clear-btn')
const searchInput=document.querySelector(".search-input");
const petList = document.querySelector('.pet-list');
const searchBtn=document.querySelector('.search-btn');
const statement1 = new Statement('ჩუქდება თეთრი კნუტი, 1 თვის','ლელა', '599965654', 'თბილისი', 'არის ძალიან საყვარელი', null, 0, 'https://envato-shoebox-0.imgix.net/2d04/0e8a-f427-11e1-952c-842b2b692e1a/2100817-001.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1110052f8c6d4715316ccbdd8eaad0fb');
const statement2 = new Statement('იყიდება თეთრი კნუტი, 1 თვის', 'სოფო', '591002211', 'თბილისი', 'არის ძალიან მამაცი', null, 0, 'https://envato-shoebox-0.imgix.net/2d04/0e8a-f427-11e1-952c-842b2b692e1a/2100817-001.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1110052f8c6d4715316ccbdd8eaad0fb');
const statement3 = new Statement('იყიდება თეთრი კნუტი, 3 თვის', 'ანი', '5599887777', 'თბილისი', 'არის ძალიან მაგარი', null, 0, 'https://envato-shoebox-0.imgix.net/2d04/0e8a-f427-11e1-952c-842b2b692e1a/2100817-001.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1110052f8c6d4715316ccbdd8eaad0fb');
const statementsArr = [statement1, statement2, statement3];
let statemenst =[]


const getStatements = ()=>{
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/statements",
    })
    .done(function (data) {
           appendAllStatements(data);
    });
}


getStatements();


const deleteStatement=(id)=>{
    $.ajax({
        method: "DELETE",
        url: `http://localhost:3000/statements/${id}`,
    })
    .done(function (data) {
          statements=data;
          alert('deleted')
          getStatements();
    });
}

const appendStatement = (statement) => {
    const statementTemplate = `
    <div class="statement">
                <p class="statement-title">${statement.title}</p>
                <img class="statement-img" src=${statement.image} alt="">
                <p class="description">${statement.description}</p>
                <p class="author-info">ავტორის სახელი: ${statement.contactPersonName}</p>
                <p class="author-info">საკონტაქტო ნომერი: ${statement.contactPersonNumber}</p>
    </div>`;
    petList.innerHTML += statementTemplate;
}


// const statementsAsString = localStorage.getItem("statements");
// const statementsAsArray= JSON.parse(statementsAsString );
// console.log(statementsAsString)
// console.log(statementsAsArray)





const appendAllStatements = (statements) => {
    petList.innerHTML ="";
    for (const statement of statements) {
        appendStatement(statements);

    }
}

searchBtn.addEventListener('click',()=>{
    petList.innerHTML="";
if(searchInput.value===''){

    appendAllStatements(statements);
    return;
}


const filteredArr=statementsArr.filter((statement)=>{
// if (statement.title===searchInput.value){
//     return true;
// }else{
//     return false;
// }
return statement.title.includes(searchInput.value);
});

appendAllStatements(filteredArr)
});



// appendAllStatements(statementsAsArray);

//clear

function clearItems (){

    clearBtn.addEventListener("click",()=>{
      
        if(clearBtn){
        
        
            localStorage.clear();
         petList.innerHTML="";
    
        
        }
        
    })
}

clearItems ()









