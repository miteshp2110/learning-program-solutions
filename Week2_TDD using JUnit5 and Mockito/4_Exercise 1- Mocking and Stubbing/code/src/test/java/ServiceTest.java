import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class ServiceTest {
    @Test
    public void testExampleApi() {
        ExampleApi api = mock(ExampleApi.class);

        when(api.getData()).thenReturn("Data from Api call");

        MyService service = new MyService(api);
        String result = service.fetchData();

        assertEquals("Data from Api call", result);
    }
}
