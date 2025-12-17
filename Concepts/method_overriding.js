// Method overriding in JavaScript 
// Method overriding is a feature in object-oriented programming that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. When a method in a subclass has the same name, return type, and parameters as a method in its superclass, the method in the subclass overrides the one in the superclass.

// Example 
 class Employee {
   login (){
    console.log("Employee logged in...")
}
  logout(){
    console.log("Employee logged out...")
  }
  requestLeaves(leaves){
    console.log(`Employee has requested ${leaves} leaves - Auto approved`)
  }
 }

 class Programmer extends Employee { 
   requestCofee(x){
    console.log(`Programmer has requested ${x} cofee.`)   
   } 
    requestLeaves(leaves){
    // console.log(`Employee has requested ${leaves +1} leaves [one extra].`)
    //better way to do it 
    super.requestLeaves(4)
        console.log(`One Extra is Granted`)
    
  }
 }

// let e = new Employee()
// e.login();
// e.requestLeaves(2);


let e = new Employee()
e.login();
e.requestLeaves(2);


