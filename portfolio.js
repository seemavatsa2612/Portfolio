// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const practiceLink = document.querySelector("#navbarDropdown");
    const practiceDropdown = document.querySelector("#practiceDropdown");
  
    practiceLink.addEventListener("mouseenter", function() {
      practiceDropdown.classList.add("show");
    });
  
    practiceDropdown.addEventListener("mouseleave", function() {
      practiceDropdown.classList.remove("show");
    });
  });
