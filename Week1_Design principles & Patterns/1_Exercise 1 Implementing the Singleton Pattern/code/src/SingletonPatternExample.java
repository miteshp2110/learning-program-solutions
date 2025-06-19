

class Logger{
    private static Logger instance;
    private Logger(){
        System.out.println("Logger created");
    }
    public static Logger getInstance(){
        if(instance==null){
            System.out.println("Creating new Logger instance");
            instance=new Logger();
        }
        else{
            System.out.println("Logger object is there");
        }
        return instance;
    }
    public void log(String msg){
        System.out.println("Logging the message: "+msg);
    }
}


class Test {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("Hello Cognizant");

        Logger logger2 = Logger.getInstance();
        logger2.log("Hello Cognizant from Singleton Pattern");
    }
}