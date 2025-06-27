package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class AppTest {

    @Test
    public void testAdd() {
        App app = new App();
        assertEquals(8, app.add(5, 3));
    }

    @Test
    public void testSubtract() {
        App app = new App();
        assertEquals(6, app.subtract(10, 4));
    }
}
