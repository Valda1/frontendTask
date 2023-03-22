var scrollButton = document.getElementById("scrollButton");

function goToTop(){
    document.documentElement.scrollTop = 0;
    //document.body.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }

  //window.onscroll = function() {scrollFunction()};


