import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ServiceTest {
    @Test
    public void testExampleApi() {
        ExampleApi api = mock(ExampleApi.class);
        MyService service = new MyService(api);

        service.fetchData();

        verify(api).getData();
    }
}
