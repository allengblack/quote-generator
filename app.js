
let quote = 'Loading...';
let theUrl = "https://talaikis.com/api/quotes/random/";

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

console.log("I reached here.");

function newQuote() {
    $("#quote_text").html(quote);

    console.log("I broke after here.");
    
    var client = new HttpClient();
    client.get(theUrl, function(response) {
        console.log(response);
    });


    // $.get("https://talaikis.com/api/quotes/","/random/", success, 'json');
    //     quote = data.quote;

    
}