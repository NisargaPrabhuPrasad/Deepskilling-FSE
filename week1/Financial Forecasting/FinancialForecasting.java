public class FinancialForecasting {

    //  Recursive method to calculate future value
    public static double calculateFutureValue(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        } else {
            return (1 + rate) * calculateFutureValue(presentValue, rate, years - 1);
        }
    }

    //  Iterative version for optimization
    public static double calculateFutureValueIterative(double presentValue, double rate, int years) {
        double result = presentValue;
        for (int i = 0; i < years; i++) {
            result *= (1 + rate);
        }
        return result;
    }

    //  Main method to test
    public static void main(String[] args) {
        double presentValue = 1000.0; // Example: $1000 today
        double rate = 0.05;           // 5% growth per year
        int years = 5;                // Predict for 5 years

        double futureValueRecursive = calculateFutureValue(presentValue, rate, years);
        double futureValueIterative = calculateFutureValueIterative(presentValue, rate, years);

        System.out.printf("Recursive Future Value after %d years: %.2f\n", years, futureValueRecursive);
        System.out.printf("Iterative Future Value after %d years: %.2f\n", years, futureValueIterative);
    }
}
