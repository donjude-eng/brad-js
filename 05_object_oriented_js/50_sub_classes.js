class Person {
    constructor (firstName , lastName){
        this.firstName = firstName;
        this.lastname = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastname}`;
    }
}

class Customer extends Person {
    constructor(firstName , lastName , phone , membership){
        super (firstName , lastName);

        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost (){
        return 500;
    }
}

const john = new Customer('John' , 'Doe' , '555-555-999' , 'Standard');

console.log (john.greeting());
console.log (Customer.getMembershipCost());