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



class Cat extends Pet{
constructor(category,age,gender){
this.age=age;
this.category=category
this.gender=gender


}
}



class Cat extends Pet {
constructor(category,age,gender,toiletFriendly){
super(category,age,gender);
this.toiletFriendly=toiletFriendly;


}
}


const statement = new Statement("ჩუქდება 2 თვის თეთრი კნუტი","1თვის","ლევან","599887788","თბილისი","არის საყვარელი",null,0,null)


