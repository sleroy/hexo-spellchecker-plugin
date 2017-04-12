'use strict';

var tokenizeMarkdown = require('tokenize-markdown');


// Get only tokens of type "code" and lang "javascript"
/**var jsTokens = tokenizeMarkdown.fromFiles(['slides/*.md'], {
    type: 'code',
    lang: 'javascript'
});

// Get tokens of lang "javascript" or "html", using a regex
var jsOrHtmlTokens = tokenizeMarkdown.fromFiles(['slides/*.md'], {
    lang: /(javascript|html)/
});
**/
module.exports = function(locals) {
    var config = this.config;

    // Get all tokens
    //    var tokens = tokenizeMarkdown.fromFiles(['some_markdown_file.md']);

    return pages;
};