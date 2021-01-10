var elements = document.querySelectorAll(".drum")

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
    alert("I got clicked!")
  })
}
