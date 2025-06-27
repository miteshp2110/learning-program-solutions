import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {
    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setting up of calculator completed ... (Before Called)");
    }
    @After
    public void tearDown() {
        calculator.clear();
        calculator = null;
        System.out.println("Tearing down of calculator completed ... (After Called)");
    }

    @Test
    public void testMultiply(){
        assertEquals("Testing the multiplication",20,5*4);
    }

}
