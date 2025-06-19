


public class Main {
    static double getFuturePrice(double pastRate,int year , double currentPrice){
        if (year==0){
            return currentPrice;
        }
        double futurePrice =currentPrice+ ((pastRate * currentPrice)/100);
        return getFuturePrice(pastRate,year-1,futurePrice);
    }


    public static void main(String[] args) {
        //the price is growing at rate of 12.42
        double pastRate = 12.42;
        //price after 2 years
        int year = 2;
        //current price
        double currentPrice = 1500.50;

        // calling the recursive fcn
        double futurePrice = getFuturePrice(pastRate,year,currentPrice);
        System.out.println("The future price is " + futurePrice);
    }
}