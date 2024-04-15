




  document.addEventListener('DOMContentLoaded', function() {
    // Get all list items with the class "mainList"
    var mainLists = document.querySelectorAll('.mainList');
  
    // Add click event listeners to each list item
    mainLists.forEach(function(listItem) {
      listItem.addEventListener('click', function() {
        // Hide all content divs
        var contents = document.querySelectorAll('.content');
        contents.forEach(function(content) {
          content.style.display = 'none';
        });
  
        // Get the target content ID from the data attribute
        var targetId = listItem.getAttribute('data-target');
        var targetContent = document.getElementById(targetId);
  
        // Show the target content
        if (targetContent) {
          targetContent.style.display = 'block';
        }
      });
    });
  });





  document.addEventListener('DOMContentLoaded', function() {
    var textarea = document.getElementById('description');
    var charCount = document.getElementById('charCount');
    
    // Add event listener to detect changes in the textarea content
    textarea.addEventListener('input', function() {
      var remaining = 1000 - textarea.value.length;
      charCount.textContent = remaining >= 0 ? remaining : 0;


      if (textarea.value.length < 50) {
        // If less than 50 characters, show the warning message
        warningMessage.style.display = 'block';
      } else {
        // If 50 characters or more, hide the warning message
        warningMessage.style.display = 'none';
      }
    });
  });
  


  // Get all the list items
const listItems = document.querySelectorAll('.mainList');

// Add click event listener to each list item
listItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove the 'active' class from all list items
    listItems.forEach(item => {
      item.classList.remove('active');
    });

    // Add the 'active' class to the clicked list item
    item.classList.add('active');
  });
});

  


// document.addEventListener('DOMContentLoaded', function() {
//     const showMoreButton = document.getElementById('showMoreButton');
//     const additionalParagraphs = document.getElementById('additionalParagraphs');
  
//     // Add click event listener to the button
//     showMoreButton.addEventListener('click', function() {
//       // Toggle the display of additional paragraphs
//       additionalParagraphs.style.display = (additionalParagraphs.style.display === 'none') ? 'block' : 'none';
//     });
//   });
  