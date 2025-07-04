package com.library.repository;

public class BookRepository {
    public void save(String title) {
        System.out.println("Saving book to repository: " + title);
    }
    public void fetchBooks() {
        System.out.println("Fetching books from repository...");
    }  
    
}
