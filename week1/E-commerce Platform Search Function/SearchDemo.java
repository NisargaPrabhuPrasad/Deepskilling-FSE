public class SearchDemo {
    public static void main(String[] args) {
        // Sample product list (already sorted by productId for binary search)
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shirt", "Clothing"),
            new Product(103, "Book", "Books"),
            new Product(104, "Headphones", "Electronics"),
            new Product(105, "Shoes", "Footwear")
        };

        int targetId = 104;

        // Linear Search
        Product foundLinear = linearSearch(products, targetId);
        System.out.println("Linear Search Result: " +
            (foundLinear != null ? foundLinear.productName : "Not found"));

        // Binary Search
        Product foundBinary = binarySearch(products, targetId);
        System.out.println("Binary Search Result: " +
            (foundBinary != null ? foundBinary.productName : "Not found"));
    }

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }
}
