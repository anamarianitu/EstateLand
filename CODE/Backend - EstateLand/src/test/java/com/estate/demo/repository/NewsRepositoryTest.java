package com.estate.demo.repository;

import com.estate.demo.model.News;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.Arrays;

import static org.mockito.ArgumentMatchers.any;

import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ActiveProfiles(value = "test")
public class NewsRepositoryTest {
    @Mock
    private NewsRepository newsRepository;

    public static final Long NEWS_ID = 1L;
    public static final String TITLE = "News title test";
    public static final String CONTENT = "News content description test";
    public static final String CATEGORY = "News category test";
    public static final boolean AVAILABLE = true;


    @Test
    @Transactional
    public void getNewsByIdTest() {
        //arrange
        News news = new News(NEWS_ID, TITLE, CONTENT, CATEGORY, AVAILABLE);
        //act
        when(newsRepository.getById(1L)).thenReturn(news);
        //assert
        Assert.assertEquals(NEWS_ID, newsRepository.getById(1L).getId());
    }

    @Test
    @Transactional
    public void getAllNewsTest() {
        //arrange
        News news1 = new News(NEWS_ID, TITLE, CONTENT, CATEGORY, AVAILABLE);
        News news2 = new News(2L, "title 2", "content 2", "category 2", AVAILABLE);
        //act
        when(newsRepository.findAll()).thenReturn(Arrays.asList(news1, news2));
        //assert
        Assert.assertEquals(Arrays.asList(news1, news2), newsRepository.findAll());
    }

    @Test
    @Transactional
    public void addNewsTest()
    {
        //arrange
        News news = new News(NEWS_ID, TITLE, CONTENT, CATEGORY, AVAILABLE);
        //act
        when(newsRepository.save(any(News.class))).thenReturn(news);
        //assert
        Assert.assertEquals(news, newsRepository.save(news));
    }
}
