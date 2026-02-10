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