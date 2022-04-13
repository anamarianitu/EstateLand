package com.estate.demo.model;

import javax.persistence.*;

@Entity
@Table(name ="news")
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "category")
    private String category;

    @Column(name = "available")
    private boolean available;

    public News() {
    }

    public News(Long id, String title, String content, String category, boolean available) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.available = available;
    }

    public Long getId(){return this.id;}
    public void setId(Long id){this.id = id;}

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean getAvailability() {
        return available;
    }

    public void setAvailability(boolean available) {
        this.available = available;
    }
}
