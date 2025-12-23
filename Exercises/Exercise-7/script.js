// Password Generator --OOP -Classes and Objects 

const generateBtn = document.getElementsByClassName("generate-btn")[0];
const passwordValues = document.querySelectorAll(".password-value");

class Password {
    constructor(length = 10, addUppercase, addNumer, addLowerCase, addSpecialChar){
        this.length = length; 
        this.addLowerCase = addLowerCase;
        this.addNumer = addNumer;
        this.addSpecialChar = addSpecialChar;
        this.addUppercase = addUppercase;
    }
    generate(){
        let charSet = "";
        const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
        const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        if(this.addLowerCase){
            charSet += lowerCaseChars;
        }
        if(this.addUppercase){
            charSet += upperCaseChars;
        }
        if(this.addNumer){
            charSet += numberChars;
        }
        if(this.addSpecialChar){
            charSet += specialChars;
        }
        if(charSet === ""){
            return new Error("At least one character type must be selected");
        }
        let password = "";
        
        for(let i = 0; i < this.length; i++){
            const randomIndex = Math.floor(Math.random() * charSet.length);
            password += charSet[randomIndex];
        }
        return password;
    }
}

