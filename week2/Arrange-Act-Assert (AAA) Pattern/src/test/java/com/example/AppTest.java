package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;

import static org.junit.Assert.*;

public class AppTest {

    private App app;

    @Before
    public void setUp() {
        // Setup (runs before each test)
        app = new App();
        System.out.println("🔧 Setup done");
    }

    @After
    public void tearDown() {
        // Teardown (runs after each test)
        app = null;
        System.out.println("🧹 Teardown done");
    }

    @Test
    public void testAdd() {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = app.add(a, b);

        // Assert
        assertEquals(8, result);
    }

    @Test
    public void testSubtract() {
        // Arrange
        int a = 10;
        int b = 4;

        // Act
        int result = app.subtract(a, b);

        // Assert
        assertEquals(6, result);
    }
}
