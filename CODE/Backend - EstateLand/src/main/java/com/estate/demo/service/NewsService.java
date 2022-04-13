package com.estate.demo.service;

import com.estate.demo.model.News;

import java.util.List;
import java.util.Optional;

public interface NewsService {

    News addNewNews(News news);

    List<News> getNews();

    Optional<News> getNewsById(Long id);

    void deleteNews(Long id);
}
