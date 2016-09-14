document.addEventListener("DOMContentLoaded",function(){
  // to do: update the #main-section to mention Wednesday

  setTimeout( function(){
    document.getElementById("main-section").innerHTML = "<h2>Wednesday is the Best Day</h2>";
  }, 3000 );

  // event listener for clicking on lis
  // that live inside of #main-section

  // jQuery form for event listeners
  // $("#supporting-section li").on("click",function(){

  // });

  var lis = document.querySelectorAll("#supporting-section li");
  console.log( lis );
  for( var i=0; i < lis.length; i++ ) {
    console.log( lis[i] );

    lis[i].addEventListener("click",function(event){
      // console.log(event);
      //this.remove();          // option 1
      event.target.remove();    // option 2
    });
  }
});

//document.getElementById("supporting-section").getElementsByTagName("li")

//document.querySelectorAll("#supporting-section li")

