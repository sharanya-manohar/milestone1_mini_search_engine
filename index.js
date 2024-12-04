const express = require('express');
const fs = require('fs');
const path = require('path');
const { loadArticles, addArticle, searchArticles, getArticleById } = require('./data');

const app = express();
app.use(express.json());

const articlesFile = path.join(__dirname, 'articles.json');

// Load articles from file at startup
loadArticles();

// POST /articles - Add a new article
app.post('/articles', (req, res) => {
    const { title, content, tags } = req.body;
    if (!title || !content || !tags) {
        return res.status(400).json({ error: 'Title, content, and tags are required.' });
    }

    const newArticle = addArticle(title, content, tags);
    res.status(201).json(newArticle);
});

// GET /articles/:id - Fetch article by ID
app.get('/articles/:id', (req, res) => {
    const articleId = parseInt(req.params.id);
    const article = getArticleById(articleId);

    if (!article) {
        return res.status(404).send({ error: 'Article not found' });
    }

    res.json(article);
});

// GET /articles/search - Search articles by keyword or tag
app.get('/articles/search', (req, res) => {
    const { keyword, sortBy = 'relevance' } = req.query;

    if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required for search.' });
    }

    const results = searchArticles(keyword, sortBy);
    res.json(results);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Mini Search Engine is running on http://localhost:${PORT}`);
});
