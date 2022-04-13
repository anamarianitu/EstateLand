package com.estate.demo.controller;


import com.estate.demo.model.HttpResponse;
import com.estate.demo.model.News;
import com.estate.demo.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(path = { "/", "/news"})
public class NewsResource {

    public static final String NEWS_DELETED_SUCCESSFULLY = "News deleted successfully.";
    private NewsService newsService;

    @Autowired
    public NewsResource(NewsService newsService){
        this.newsService = newsService;
    }

    @PostMapping({"/addNews"})
    public News addNewNews(@RequestBody News news) {
        return newsService.addNewNews(news);
    }

    @GetMapping("/allNews")
    public ResponseEntity<List<News>> getAllNews(){
        List<News> news = newsService.getNews();
        return new ResponseEntity<>(news, OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<News>> getNewsPath(@PathVariable(value = "id") Long id) {
        Optional<News> news = newsService.getNewsById(id);

        if(news != null) {
            return ResponseEntity.ok().body(news);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAnyAuthority('user:delete')")
    public ResponseEntity<HttpResponse> deleteNews(@PathVariable("id") Long id){
        newsService.deleteNews(id);
        return response(NO_CONTENT, NEWS_DELETED_SUCCESSFULLY);
    }

    private ResponseEntity<HttpResponse> response(HttpStatus httpStatus, String message) {
        return new ResponseEntity<>(new HttpResponse(httpStatus.value(), httpStatus, httpStatus.getReasonPhrase().toUpperCase(),
                message.toUpperCase()), httpStatus);
    }



}
