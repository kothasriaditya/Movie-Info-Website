$(document).ready(function() {
    // Load the web page using jQuery's $.get() method
    $.get("file:///C:/Users/SunnyAkhil/OneDrive/Desktop/Final/parse.html", function(data) {
      // Use jQuery selectors to find the <h2> elements
      var $headings = $(data).find("h2");
      
      // Create an array to store the extracted text content
      var headingsArray = [];
      
      // Use a loop to extract the text content of each <h2> element
      $headings.each(function() {
        var text = $(this).text();
        headingsArray.push(text);
      });
      
      // Output the extracted text content to the console
      console.log(headingsArray);
    });
  });
  