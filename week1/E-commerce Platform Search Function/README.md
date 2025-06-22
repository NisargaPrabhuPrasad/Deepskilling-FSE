# E-commerce Platform Search Function

##  1. Asymptotic Notation

**Big O Notation** describes how an algorithm’s runtime grows with the input size.

| Algorithm        | Best Case | Average Case | Worst Case |
|------------------|-----------|---------------|------------|
| Linear Search    | O(1)      | O(n)          | O(n)       |
| Binary Search    | O(1)      | O(log n)      | O(log n)   |

- **Linear Search** is simple but inefficient for large lists.
- **Binary Search** is fast (logarithmic time) but needs sorted data.


##  2. Implementation

- `Product` class holds `productId`, `productName`, and `category`.
- **Linear Search:** Scans each product until it finds the match.
- **Binary Search:** Uses divide and conquer; much faster for large, sorted datasets.



##  3. Run Instructions

 Compile all `.java` files:

bash
javac *.java

## OUTPUT

![E-COMMERCE PLATFORM OUTPUT](./output.png)