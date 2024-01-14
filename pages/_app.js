<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Search Engine</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="search-container">
        <img src="google-logo.png" alt="Islam Search Engine" class="logo">
        <div class="search-box">
            <input type="text" id="search-query" placeholder="Search...">
            <button onclick="search()">Search</button>
        </div>
        <div class="buttons">
            <button onclick="feelingLucky()">I'm Feeling Lucky</button>
        </div>
    </div>

    <script>
        // تعريف وظيفة البحث
        function search() {
            // قم بتنفيذ البحث هنا
            console.log('Performing search...');
        }

        // تعريف وظيفة "I'm Feeling Lucky"
        function feelingLucky() {
            // قم بتنفيذ الإجراء الذي تريده عند الضغط على "I'm Feeling Lucky"
            console.log('Feeling Lucky!');
        }
    </script>
</body>
</html>
