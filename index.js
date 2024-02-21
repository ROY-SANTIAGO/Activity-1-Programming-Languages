const UserData = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    isAdmin: false,
    fullName: function(){
        return "Full Name: " + this.firstName + " " + this.lastName;
    },
    
    adminInformation: function(){
        if(this.isAdmin === true){          
            return "Age: " + this.age + "\Email: " + this.email + "Role: Admin"
        }else{
           return  "Age: " + this.age + "\nEmail: " + this.email + "\nRole: User"
        }
    },

    userInformation: function(){
            if(this.isAdmin !== true){
                return "Age: " + this.age + "\nEmail: " + this.email + "\nRole: Admin"
            }else{
                return "Age: " + this.age + "\nEmail: " + this.email + "\nRole: User"
            }   
        }
    }


console.log("User Information");
console.log(UserData.fullName());
console.log(UserData.adminInformation());

console.log("Admin Information");
console.log(UserData.fullName());
console.log(UserData.userInformation());