class Statement{
    constructor(title,contactPersonName,contactPersonNumber,address,description,pet,price,image){
this.contactPersonName=contactPersonName;
this.contactPersonNumber=contactPersonNumber;
this.address=address;
this.description=description;
this.pet=pet;
this.title=title;
this.price=price;
this.image=image;
    }
}



class Pet{
constructor(category,age,gender,color){
this.age=age;
this.category=category;
this.gender=gender;
this.color=color


}
}


class Cat extends Pet {
constructor(category,age,gender,toiletFriendly){
super(category,age,gender,color);
this.toiletFriendly=toiletFriendly;



}
}

class Dog extends Pet {
    constructor(category,age,gender,toiletFriendly,breed){
    super(category,age,gender,color);
    this.toiletFriendly=toiletFriendly;
    this.breed=breed


    }
    }
    class Hamster extends Pet {
        constructor(category,age,gender,toiletFriendly,food){
        super(category,age,gender,color);
        this.toiletFriendly=toiletFriendly;
        this.food=food;
       
        
        
        }
        }
        class Monkey extends Pet {
            constructor(category,age,gender,toiletFriendly,trained){
            super(category,age,gender,color);
            this.toiletFriendly=toiletFriendly;
            this.trained=trained
            
            
            }
            }

const statement = new Statement("ჩუქდება თეთრი კნუტი 1 თვის","ლევან","599887788","თბილისი","არის მაგარი კნუტი",null,0,null)


