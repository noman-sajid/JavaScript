/**
 * DEPTH-FIRST SEARCH (DFS)
 * * CONCEPT:
 * DFS is a traversal algorithm that explores a branch as far as possible 
 * before backtracking. It prioritizes "depth" over "breadth."
 * * THE MENTAL MODEL:
 * 1. The Maze: Pick a path, follow it until you hit a dead end, then turn back.
 * 2. The Stack: Uses a Last-In-First-Out (LIFO) structure. In recursion, 
 * this is handled implicitly by the JavaScript Call Stack.
 * * MODULAR RULES FOR PROBLEM SOLVING:
 * - Base Case: The exit condition (e.g., "Did I find the target?").
 * - Recursive Step: The dive (e.g., "Go deeper into children").
 * - The Bubble Up: Explicitly returning found data back up through the stack.
 * * REAL-WORLD MERN USE CASES:
 * - Navigating nested E-Commerce categories.
 * - Managing hierarchical Team/Project dependencies in Admin Dashboards.
 * - Generating breadcrumbs for complex site navigation.
 */

// Traversal Logic:
// Root -> Child A -> Sub-Child 1 (Dead end) -> Backtrack -> Child B...


function findInCategoryMenu(menu, targetName) {
  
  if (menu.name === targetName) {
    return menu;
  }

  if (menu.subCategories) {
    for (let sub of menu.subCategories) {
      const found = findInCategoryMenu(sub, targetName);
      if (found) return found;
    }
  }
  return null;
}

console.log(findInCategoryMenu(categoryMenu, "DSLR"));
// Output : { name: 'DSLR', subCategories: [] }


// Common interview Questions 
// 1. Find a value in a nested object structure (like the category menu).
// 2. Generate all paths from root to leaf nodes in a tree (e.g., file system).
// 3. Count the number of nodes in a tree or graph.
// 4. Check if a path exists between two nodes in a graph.
// 5. Solve puzzles like the N-Queens problem or Sudoku using backtracking (a form of DFS).

// Solutions of common intervew questions

//1
function findValueInNestedObject(obj, target) {
  if (obj.value === target) {
    return obj;
  }
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            const found = findValueInNestedObject(obj[key], target);
            if (found) return found;
        }   
    }
  return null;
}

findInCategoryMenu({
  name: "Electronics",
  subCategories: [
    { name: "Laptops", subCategories: [] },
    { name: "Cameras", subCategories: [{ name: "DSLR", subCategories: [] }] },
  ],
}, "DSLR");
// Output : { name: 'DSLR', subCategories: [] }