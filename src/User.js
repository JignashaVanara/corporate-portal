class User {
    
    constructor(id, firstName, lastName, dob, userName, email, password) {
        this.userId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.userName = userName;
        this.email = email;
        this.setUserPassword(password);
    }
    //get methods
    getUserId() {
        return this.userId;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getDOB() {
        return this.dob;
    }
    getUserName() {
        return this.userName;
    }
    getEmail(){
        return this.email;
    }
    getUserPassword() {
        return this.password;
    }
    //set methods
    setUserId(id) {
        this.userId = id;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setDOB(dob) {
        this.dob = dob;
    }
    setUserName(userName) {
        this.userName = userName;
    }
    setEmail(email) {
        this.email = email;
    }
    setUserPassword(password) {
        if (this.validPassword(password)) {
            this.password = password;
        } else {
            console.log("Password must have at least 1 uppercase letter, 1 symbol, 2 numbers,"
                + "and have a length of at least 8 characters.");
        }
    }
    //valid password method
    validPassword(password) {
        if (password.length >= 8) {
            let upper = 0;
            let numbers = 0;
            let symbols = 0;

            for (let i = 0; i < password.length; i++) {
                if (this.isDigit(password[i])) {
                    numbers++;
                } else if (!this.isLetterOrDigit(password[i])) {
                    symbols++;
                } else if (this.isUpperCase(password[i])) {
                    upper++;
                }
            }

            if (upper >= 1 && numbers >= 2 && symbols >= 1) {
                return true;
            }
        }
        return false;
    }
    //returns if character is a letter
    isUpperCase(char) {
        return (/[A-Z]/).test(char)
    }
    //returns if character is a digit
    isDigit(char) {
        return (/[1-9]/).test(char)
    }
    //returns if character is a letter or digit
    isLetterOrDigit(char) {
        return ((/[a-zA-Z]/).test(char) || (/[1-9]/).test(char))
    }
}

let user1 = new User(123, "Harry", "Potter", "01/01/1990", "hogwards", "hp@gmail.com", "hpWorld123@");
console.log(user1);
console.log(user1.getUserId());
console.log(user1.getFirstName());
console.log(user1.getLastName());
console.log(user1.getDOB());
console.log(user1.getUserName());
console.log(user1.getEmail());
console.log(user1.getUserPassword());