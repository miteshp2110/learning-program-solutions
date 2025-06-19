import java.util.Arrays;
import java.util.Comparator;

class Product{
    int productId;
    String productName;
    String category;

    public Product(String productName, int productId,String category) {
        this.productName = productName;
        this.productId = productId;
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}

class Search{
    public static Product linearSearch(String productName,Product[] products){
        for(int i=0;i<products.length;i++){
            if(products[i].productName.equals(productName)){
                return products[i];
            }
        }
        return null;
    }

    public static Product binarySearch(String productName,Product[] products){
        int high = products.length-1;
        int low = 0;
        while(low<=high){
            int mid = (low+high)/2;
            if(products[mid].productName.equals(productName)){
                return products[mid];
            }
            else{
                if(products[mid].productName.compareTo(productName)>0){
                    high = mid-1;
                }
                else{
                    low = mid+1;
                }
            }
        }
        return null;
    }
}

public class Main {
    public static void main(String[] args) {
        Product p1 = new Product("Iphone 16 Pro Max",47,"Mobile");
        Product p2 = new Product("Samsung S25 Ultra",23,"Mobile");
        Product p3 = new Product("Sony QHD 55inch",85,"TV");
        Product p4 = new Product("Lg QLED 65inch",75,"TV");

        Product [] products = {p1,p2,p3,p4};

        // Doing Linear search on array of products
        // Pass condition
        Product result = Search.linearSearch("Samsung S25 Ultra",products);
        if(result!=null){
            System.out.println("Product Found : ");
            System.out.println(result);
        }
        else{
            System.out.println("Product Not Found");
        }

        // fail condition
        result = Search.linearSearch("Samsung Tv",products);
        if(result!=null){
            System.out.println("Product Found : ");
            System.out.println(result);
        }
        else{
            System.out.println("Product Not Found");
        }

        // sorting using comparator on productNames
        Arrays.sort(products,new Comparator<Product>() {
            public int compare(Product p1, Product p2) {
                return p1.productName.compareTo(p2.productName);
            }
        });

        // doing binary search

        // pass condition
        result = Search.binarySearch("Sony QHD 55inch",products);
        if(result!=null){
            System.out.println("Product Found : ");
            System.out.println(result);
        }
        else{
            System.out.println("Product Not Found");
        }

        // fail condition
        result = Search.binarySearch("Mi Tv",products);
        if(result!=null){
            System.out.println("Product Found : ");
            System.out.println(result);
        }
        else{
            System.out.println("Product Not Found");
        }



    }
}