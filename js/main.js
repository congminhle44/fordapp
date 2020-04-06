    //Get the button:
    mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  function MyFunction(x){
    if(x.matches){
      document.getElementById("divHide").style.display = "none";
      document.getElementById('btnHide').style.display = "none";
      document.getElementById('btnView').style.display = "block";
      document.getElementById("btnHide").addEventListener('click',function(){
      document.getElementById("divHide").style.display = "none";
      document.getElementById('btnHide').style.display = "none";
      document.getElementById('btnView').style.display = "block";
    })
      document.getElementById("btnView").addEventListener('click',function(){
      document.getElementById("divHide").style.display = "block";
      document.getElementById('btnHide').style.display = "block";
      document.getElementById('btnView').style.display = "none";
    })
    }else{
      document.getElementById("divHide").style.display = "grid";
    }
    }
    var x = window.matchMedia("(max-width: 767px)")
    MyFunction(x) // Call listener function at run time
    x.addListener(MyFunction) // Attach listener function on state changes

function myFunction(x) {
x.classList.toggle("change");
}

// display when click search item hide in default on quickaccess div
