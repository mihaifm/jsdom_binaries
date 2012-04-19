//Example on how to load a html file with scripts in jsdom

var fs = require('fs');
var jsdom = require('jsdom');
var doc   = jsdom.jsdom(fs.readFileSync("test.html"), null, {
          features: {
            FetchExternalResources   : ['script'],
            ProcessExternalResources : ['script'],
            MutationEvents           : '2.0',
        }
    });

var window = doc.createWindow();
jsdom.jQueryify(window, "http://code.jquery.com/jquery-1.5.min.js", function() {
    console.log(window.a);
    console.log(window.$().jquery); //jquery version
});
