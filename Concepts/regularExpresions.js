// Regular Expressions in JavaScript
// A regular expression is a sequence of characters that forms a search pattern.
// They are used for pattern matching within strings.

let regex = /very/g
 
let person = "He is a very very nice and very awsome person!"

console.log(person.replace(regex, "Very"));

// Problem:
// Reverse the words in a given string.

let str = "  Hello   World  "

function reverseWords(str){
    return str.trim().split(/\s+/).reverse().join(" ")
}

console.log(reverseWords(str));

// Interview Questions Using Regular Expressions:
// 1. Find the first non-repeating character in a string.

function firstUnique(str) {
  for (let i = 0; i < str.length; i++) {
    const regex = new RegExp(str[i], "g");
    if (str.match(regex).length === 1) {
      return str[i];
    }
  }
  return null;
}

// not good from an interview perspective as its O(n^2) time complexity

// most common interview questions regarding regex 
/*
1. What is a regular expression?

What they want: clarity, not poetry.

Good answer:
A regular expression is a pattern used to match, search, or manipulate text. It’s commonly used for validation, parsing, and extraction.

If you add:

“It’s declarative pattern matching, not general logic”
you sound experienced.

2. Common regex symbols and what they mean

They often ask this casually.

Symbol	Meaning
.	Any character except newline
*	0 or more
+	1 or more
?	0 or 1
^	Start of string
$	End of string
[]	Character set
()	Grouping
`	`
\	Escape

👉 Red flag if someone thinks regex is magic and can’t explain these.

3. Difference between * and +

This one is very common.

Answer:

* → zero or more

+ → one or more

Example:

a*   // "", "a", "aaa"
a+   // "a", "aaa"

4. What does ^ and $ do?

They love this because many people misuse regex without anchors.

Answer:

^ matches the start

$ matches the end

^\d+$   // whole string must be digits


Without anchors, it just finds digits somewhere.

5. How do you validate an email with regex?

⚠️ Trick question.

Best answer:

“A simple regex can validate format, but full email validation via regex is unreliable. It’s better to combine regex with verification.”

Then show a simple one:

^[^\s@]+@[^\s@]+\.[^\s@]+$


Interviewers like restraint more than wizardry.

6. Difference between greedy and lazy matching

This separates beginners from people who’ve suffered 😄

<.*>   // greedy
<.*?>  // lazy


Greedy: matches as much as possible
Lazy: matches as little as possible

7. What is a character class?
[abc]     // a or b or c
[a-z]     // lowercase letters
[^0-9]    // NOT a digit


They may ask:

“Difference between . and [a-zA-Z]?”

Answer: . is broader and includes digits and symbols.

8. What are capturing groups?
(\d{4})-(\d{2})-(\d{2})


Used to:

Extract data

Reuse with backreferences

Bonus point if you mention:

(?:...) // non-capturing group

9. What is a backreference?
(\w+)\s\1


Matches repeated words:

"hello hello"


This is advanced but impressive if explained simply.

10. Regex vs string methods

They love this comparison.

Good answer:

Regex → pattern-based matching

String methods → simpler, faster, clearer for basic cases

Use regex only when pattern complexity justifies it

11. Can regex be used to parse HTML?

Correct answer:

No.

Slightly better answer:

“Regex can handle simple cases, but HTML is not a regular language. Use a parser.”

This is a classic interview landmine.

12. Regex performance concerns

Advanced but excellent.

Mention:

Catastrophic backtracking

Avoid nested quantifiers like (a+)+

Keep patterns specific

Even a short mention shows maturity.

3 questions you might actually be asked to write

Validate a password (length, digit, uppercase)

Extract numbers from a string

Remove extra spaces

Example:

\s+   // collapse spaces

What interviewers really check

Not mastery.
They check:

Do you know when NOT to use regex

Can you explain what your pattern does

Can you keep it readable
*/