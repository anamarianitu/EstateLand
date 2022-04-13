package com.estate.demo.service.implementation;

import com.estate.demo.model.News;
import com.estate.demo.repository.NewsRepository;
import com.estate.demo.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NewsServiceImplementation implements NewsService {

    private NewsRepository newsRepository;

    @Autowired
    public NewsServiceImplementation(NewsRepository newsRepository){
        this.newsRepository = newsRepository;
    }

    @Override
    public News addNewNews(News news) {
        newsRepository.save(news);
        return news;
    }

    @Override
    public List<News> getNews() {
        return newsRepository.findAll();
    }

    @Override
    public Optional<News> getNewsById(Long id) {
        return newsRepository.findById(id);
    }

    @Override
    public void deleteNews(Long id) {
        newsRepository.deleteById(id);
    }
}
