import org.junit.Test;

import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertEqual(){
        assertEquals(5+3,8);
    }
    @Test
    public void testAssertNotEqual(){
        assertNotEquals(5,1+1);
    }
    @Test
    public void testAssertTrue(){
        assertTrue(5>2);
    }
    @Test
    public void testAssertFalse(){
        assertFalse(5<2);
    }
    @Test
    public void testAssertNull(){
        assertNull(null);
    }
    @Test
    public void testAssertNotNull(){
        assertNotNull(new Object());
    }
}
