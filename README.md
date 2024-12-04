# Mini Search Engine for Articles
A simple search engine that allows users to add, search, and retrieve articles efficiently. 
The backend mimics the behavior of a basic search engine with support for keyword searches and relevance-based sorting.

# Features
- **Add articles**: Add articles with a title, content, and tags.
- **Search articles**: Search articles by keywords in the title or content.
- **Sort results**: Sort search results by relevance (keyword frequency) or date.

# Prerequisites:
- Node.js: Ensure you have Node.js installed. You can check by running node -v in your terminal.
- Text Editor: Use any text editor like Visual Studio Code.

# Steps to Run the Application:
1) Initialize npm:
   npm init -y
2) Install Express:
   npm install express
3) Run the Server:
   node index.js
4) Access the Application:
  go to http://localhost:3000
5) Test the API Endpoints with Postman:
   
   **Add Article (POST /articles):**
      -In Postman, set the request method to POST.
      -Set the URL to: http://localhost:3000/articles.
      -Under the "Body" tab, select raw and JSON.
      -Enter the JSON data for the article. for example:
         {
           "title": "Sample Article",
           "content": "This is the content of the sample article.",
           "tags": ["example", "tutorial"]
         }
      -Click Send. You should see a response with the new article's details and a 201 status code.
   
   **Get Article by ID (GET /articles/:id):**
      -set the request method to GET.
      -Set the URL to: http://localhost:3000/articles/1 (assuming you have an article with ID 1).
      -Click Send. You should get a response with the details of the article with ID 1.

   
