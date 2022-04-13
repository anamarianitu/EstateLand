package com.estate.demo.model;

import org.junit.After;
import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.transaction.Transactional;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class NewsTest {

    public static final Long NEWS_ID = 10L;
    public static final String TITLE = "News title test";
    public static final String CONTENT = "News content description test";
    public static final String CATEGORY = "News category test";
    public static final boolean AVAILABLE = true;

    private final News news = new News(NEWS_ID, TITLE, CONTENT, CATEGORY, AVAILABLE);

    @AfterEach
    public void tearDown() {
    }

    @Test
    @Transactional
    public void getIdTest() {
        Assert.assertEquals(NEWS_ID, news.getId());
    }

    @Test
    @Transactional
    public void setIdTest() {
        Long newId = 11L;
        news.setId(newId);
        Assert.assertEquals(newId, news.getId());
    }

    @Test
    @Transactional
    public void getTitleTest() {
        Assert.assertEquals(TITLE, news.getTitle());
    }

    @Test
    @Transactional
    public void setTitleTest() {
        String newNewsTitle = "Add new title test";
        news.setTitle(newNewsTitle);
        Assert.assertEquals(newNewsTitle, news.getTitle());
    }

    @Test
    @Transactional
    public void getContentTest() {
        Assert.assertEquals(CONTENT, news.getContent());
    }

    @Test
    @Transactional
    public void setContentTest() {
        String newNewsContent = "Add new content test";
        news.setContent(newNewsContent);
        Assert.assertEquals(newNewsContent, news.getContent());
    }

    @Test
    @Transactional
    public void getCategoryTest() {
        Assert.assertEquals(CATEGORY, news.getCategory());
    }

    @Test
    @Transactional
    public void setCategoryTest() {
        String newNewsCategory = "Add new category test";
        news.setCategory(newNewsCategory);
        Assert.assertEquals(newNewsCategory, news.getCategory());
    }

    @Test
    @Transactional
    public void getAvailableTest() {
        Assert.assertEquals(AVAILABLE, news.getAvailability());
    }

    @Test
    @Transactional
    public void setAvailableTest() {
        news.setAvailability(false);
        Assert.assertEquals(false, news.getAvailability());
    }
}
