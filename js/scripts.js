

$(document).ready(function() {
  $("form#dating").submit(function(event) {    
    var gender = $("select#gender").val();
    var height = $("select#height").val();
    var intelligence = $("select#intelligence").val();
    var yourCelebrity = " ";

    // if (gender === "female") { 
    //   if (height === 'tall') {
    //     if (intelligence === 'smart') {
    //       return CelebrityA
    //     }
    //   } else if () {

    //   }
    // }
    // } else if (height === "tall") { return null
    // } else (intelligence === "smart") { return null
    //   yourCelebrity = "CelebrityA";
    //   alert(yourCelebrity);
    // }
    
    if (gender === "female" && height === "short" && intelligence === "smart"){
      yourCelebrity = "CelebrityA";
    };
    
    if (gender === "female" && height === "tall" && intelligence === "dumb"){
      yourCelebrity = "CelebrityB";
    };
    
    if (gender === "female" && height === "short" && intelligence === "dumb"){
      yourCelebrity = "CelebrityC";
    };
    
    if (gender === "male" && height === "tall" && intelligence === "smart"){
      yourCelebrity = "CelebrityD";
    };
    
    if (gender === "male" && height === "short" && intelligence === "smart"){
      yourCelebrity = "CelebrityE";
    };
    
    if (gender === "male" && height === "tall" && intelligence === "dumb"){
      yourCelebrity = "CelebrityF";
    };
    
    if (gender === "male" && height === "short" && intelligence === "dumb"){
      yourCelebrity = "CelebrityG";
    };
    console.log(yourCelebrity);
    
    // $("#partner").empty().append(yourCelebrity);
    // $("#match").show();

    event.preventDefault();
  });
});