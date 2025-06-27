public class MyService {
    private ExampleApi exampleApi;

    public MyService(ExampleApi exampleApi) {
        this.exampleApi = exampleApi;
    }
    public String fetchData(){
        return exampleApi.getData();
    }
}
