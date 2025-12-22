/*
╔════════════════════════════════════════════════════════════════════════════╗
║                  IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION            ║
╚════════════════════════════════════════════════════════════════════════════╝

📌 ONE-LINER: A function that is defined and executed immediately, creating
   its own scope and then disappearing (disposable function pattern).
*/

// ============================================================================
// 1. WHAT IS IIFE?
// ============================================================================
/*
   DEFINITION: An IIFE is a function that is created and called at the same time.
   
   🎯 ANALOGY: Like a disposable cup ☕
      - Create it
      - Use it immediately
      - Throw it away
      - It's born, takes a breath, does its job, and vanishes in the same moment
      
   ONE-LINER: "A self-executing function that runs once and creates its own scope"
*/

// ============================================================================
// 2. BASIC SYNTAX PATTERNS
// ============================================================================

// Pattern 1: Function Declaration wrapped in parentheses
(function() {
    console.log("IIFE - Function Declaration");
})();

// Pattern 2: Function Expression wrapped in parentheses
(function() {
    console.log("IIFE - Function Expression");
})();

// Pattern 3: Arrow Function (ES6+)
(() => {
    console.log("IIFE - Arrow Function");
})();

// Pattern 4: With parameters
(function(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
})("John", 25);

// Pattern 5: Returning a value
const result = (function() {
    return 42;
})();
console.log(result); // 42

// ============================================================================
// 3. WHY USE IIFE? - KEY BENEFITS
// ============================================================================

/*
   ✅ BENEFIT #1: Creates PRIVATE SCOPE
   ONE-LINER: "Prevents variables from polluting global scope"
*/
(function() {
    let privateVar = "I'm private";
    const privateFunc = () => console.log(privateVar);
})();
// console.log(privateVar); // ❌ ReferenceError - privateVar is not accessible

/*
   ✅ BENEFIT #2: AVOID GLOBAL NAMESPACE POLLUTION
   ONE-LINER: "Keep your code clean and prevent naming conflicts"
*/
// Without IIFE (pollutes global)
var x = 10;
var y = 20;

// With IIFE (encapsulated)
(function() {
    var x = 100; // Different from global x
    var y = 200; // Different from global y
})();

/*
   ✅ BENEFIT #3: MODULE PATTERN - Creates MODULES with public/private members
   ONE-LINER: "Exposing only what you want the outside world to access"
*/
const Calculator = (function() {
    // Private variables and functions
    let result = 0;
    
    function privateAdd(a, b) {
        return a + b;
    }
    
    // Public API - only return what you want exposed
    return {
        add: function(a, b) {
            result = privateAdd(a, b);
            return result;
        },
        getResult: function() {
            return result;
        }
        // privateAdd is NOT accessible from outside
    };
})();

console.log(Calculator.add(5, 3));      // 8
console.log(Calculator.getResult());    // 8
// console.log(Calculator.privateAdd()); // ❌ Error - not exposed

/*
   ✅ BENEFIT #4: AVOID VARIABLE HOISTING ISSUES
   ONE-LINER: "Control when and how variables are declared"
*/

/*
   ✅ BENEFIT #5: EXECUTE INITIALIZATION CODE SAFELY
   ONE-LINER: "Run setup code without creating reusable functions"
*/
(function() {
    // Initialize app
    const API_KEY = "secret123";
    const BASE_URL = "https://api.example.com";
    console.log("App initialized with API_KEY:", API_KEY);
})();

// ============================================================================
// 4. WORKING WITH PROMISES & ASYNC/AWAIT IN IIFE
// ============================================================================

/*
   ONE-LINER: "IIFE is the perfect wrapper for top-level async/await code"
*/

let fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched from server");
        }, 2000);
    });
};

// Before IIFE - This would cause issues (can't use await at top level)
// let data = await fetchData(); // ❌ SyntaxError

// With IIFE - This works perfectly
(async () => {
    try {
        let data1 = await fetchData();
        console.log(data1);
        
        let data2 = await fetchData();
        console.log(data2);
        
        let data3 = await fetchData();
        console.log(data3);
    } catch (error) {
        console.error("Error:", error);
    }
})();

// ============================================================================
// 5. PARAMETER PASSING TO IIFE
// ============================================================================

/*
   ONE-LINER: "Pass variables to IIFE to use them in private scope"
*/

(function(global, $, undefined) {
    // 'global' is the window object
    // '$' would be jQuery if passed
    // 'undefined' cannot be redefined in this scope
    
    console.log("Global object:", global);
})(window);

// ============================================================================
// 6. RETURNING VALUES FROM IIFE
// ============================================================================

/*
   ONE-LINER: "Use IIFE to create computed values or configured functions"
*/

// Return an object (Module Pattern)
const UserModule = (function() {
    let users = [];
    
    return {
        addUser(user) {
            users.push(user);
        },
        getUsers() {
            return [...users]; // Return copy
        },
        clearUsers() {
            users = [];
        }
    };
})();

UserModule.addUser({ id: 1, name: "Alice" });
UserModule.addUser({ id: 2, name: "Bob" });
console.log(UserModule.getUsers());

// Return a function
const Counter = (function() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
})();

console.log(Counter()); // 1
console.log(Counter()); // 2
console.log(Counter()); // 3

// ============================================================================
// 7. COMMON USE CASES
// ============================================================================

/*
   🎯 USE CASE #1: Library/Plugin Initialization
   ONE-LINER: "Safely initialize a library without affecting global scope"
*/
(function(window) {
    window.MyLibrary = {
        version: "1.0.0",
        init: function() {
            console.log("MyLibrary initialized");
        }
    };
})(window);

/*
   🎯 USE CASE #2: Event Listeners with Closures
   ONE-LINER: "Create proper closures for event handlers in loops"
*/
// Common mistake in loops - without IIFE
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100); // prints 3, 3, 3 (wrong!)
// }

// With IIFE - proper closure
for (var i = 0; i < 3; i++) {
    (function(index) {
        setTimeout(() => console.log(index), 100); // prints 0, 1, 2 (correct!)
    })(i);
}

/*
   🎯 USE CASE #3: Revealing Module Pattern
   ONE-LINER: "Declare all functions inside but reveal only selected ones"
*/
const RevealingModule = (function() {
    // Private functions
    function privateMethod() {
        return "Private";
    }
    
    function publicMethod() {
        return privateMethod() + " turned Public";
    }
    
    // Reveal selected methods
    return {
        publicMethod: publicMethod
    };
})();

console.log(RevealingModule.publicMethod()); // Private turned Public
// console.log(RevealingModule.privateMethod()); // ❌ Not accessible

// ============================================================================
// 8. ALTERNATIVES & WHEN NOT TO USE IIFE
// ============================================================================

/*
   MODERN ALTERNATIVES:
   ONE-LINER: "In modern JS, modules and block scope often replace IIFE"
   
   ✅ ES6 Modules: import/export
   ✅ Block Scope: let/const in { } blocks
   ✅ Classes: Private fields with #
*/

// Example with ES6 let/const
{
    let blockScopedVar = "I'm confined to this block";
    console.log(blockScopedVar);
}
// console.log(blockScopedVar); // ❌ ReferenceError

// Example with Class and private fields
class MyClass {
    #privateField = "Private";
    
    publicMethod() {
        return this.#privateField;
    }
}

// ============================================================================
// 9. QUICK REFERENCE CHEAT SHEET
// ============================================================================

/*
   🔑 KEY CONCEPTS TO REMEMBER:
   
   ① IMMEDIATE: Function runs the moment it's defined
      ONE-LINER: "Define and execute in one go"
   
   ② PRIVATE: Creates isolated scope
      ONE-LINER: "What happens in IIFE stays in IIFE"
   
   ③ MODULE: Perfect for implementing module pattern
      ONE-LINER: "Public API + Private implementation"
   
   ④ ASYNC: Wrapper for top-level await
      ONE-LINER: "The only way to use await outside async functions at module level"
   
   ⑤ PARAMETERS: Can accept and use external values
      ONE-LINER: "Pass globals to protect them from modification"
*/

// ============================================================================
// 10. PRACTICAL EXAMPLE - COMPLETE MODULE
// ============================================================================

const ShoppingCart = (function() {
    // Private data
    let items = [];
    const TAX_RATE = 0.1;
    
    // Private function
    function calculateTax(price) {
        return price * TAX_RATE;
    }
    
    // Public API
    return {
        addItem: function(product, price) {
            items.push({ product, price });
            return `${product} added to cart`;
        },
        
        getTotalPrice: function() {
            const subtotal = items.reduce((sum, item) => sum + item.price, 0);
            const tax = calculateTax(subtotal);
            return {
                subtotal: subtotal.toFixed(2),
                tax: tax.toFixed(2),
                total: (subtotal + tax).toFixed(2)
            };
        },
        
        getItems: function() {
            return [...items]; // Return copy to prevent external modification
        },
        
        clear: function() {
            items = [];
            return "Cart cleared";
        }
    };
})();

// Usage
console.log(ShoppingCart.addItem("Laptop", 1000));
console.log(ShoppingCart.addItem("Mouse", 30));
console.log(ShoppingCart.getTotalPrice());
// console.log(ShoppingCart.items); // ❌ Not accessible
// console.log(ShoppingCart.TAX_RATE); // ❌ Not accessible