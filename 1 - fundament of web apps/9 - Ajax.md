## AJAX (Asynchronous JavaScript And XML)

The notes page in example app uses old method that was introduced in 2005 called AJAX (still relevant). It enabled the fetching of content to web pages using JavaScript included within the HTML, without the need to rerender the page.

- Prior to AJAX, all web pages worked like the traditional web apps which loads all the contents from the HTML code generated by the server

- The Notes page uses AJAX to fetch the notes data. Submitting the form still uses the traditional mechanism of submitting web-forms.

- The application URLs reflect the old, carefree times. JSON data is fetched from the url https://studies.cs.helsinki.fi/exampleapp/data.json and new notes are sent to the URL https://studies.cs.helsinki.fi/exampleapp/new_note.

- Nowadays URLs like these would not be considered acceptable, as they don't follow the generally acknowledged conventions of RESTful APIs.
