
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

function newQuote() {
    console.log("I broke after here.");
    var client = new HttpClient();
    client.get('http://some/thing?with=arguments', function(response) {
        // do something with response
        console.log(response);
    });


    // $.get("https://talaikis.com/api/quotes/","/random/", success, 'json');
    //     quote = data.quote;

    // $("#quote_text").html(quote);
}