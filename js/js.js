var createNewColor = function() {
  return '#'+ (Math.random()*0xFFFFFF<<0).toString(16);
}

var twitterUrl = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';
var tumblrUrl = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=';
var currentQuote;
var docColor = createNewColor();
var getPageContents = function(){
    animatePageContent();    
    animateQuote();
}

$('.newQuoteBtn').click(function(){
    docColor = createNewColor();
    animateQuote();
    animatePageContent();
});

var quotes = [
  {'id': 0, 'quote': 'Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved.', 'saidBy': 'Mattie Stepanek'},
  {'id': 1, 'quote': 'No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.', 'saidBy': 'Buddha'},
  {'id': 2, 'quote': 'Strength and growth come only through continuous effort and struggle.', 'saidBy': 'Napoleon Hill'},
  {'id': 3, 'quote': 'Be sure you put your feet in the right place, then stand firm.', 'saidBy': 'Abraham Lincoln'},
  {'id': 4, 'quote': 'Some of us think holding on makes us strong; but sometimes it is letting go.', 'saidBy': 'Hermann Hesse'},
  {'id': 5, 'quote': 'I love those who can smile in trouble, who can gather strength from distress, and grow brave by reflection. \'Tis the business of little minds to shrink, but they whose heart is firm, and whose conscience approves their conduct, will pursue their principles unto death.', 'saidBy': 'Leonardo da Vinci'},
  {'id': 6, 'quote': 'The world breaks everyone, and afterward, some are strong at the broken places.', 'saidBy': 'Ernest Hemingway'},
  {'id': 7, 'quote': 'Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.', 'saidBy': 'Arnold Schwarzenegger'},
  {'id': 8, 'quote': 'Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.', 'saidBy': 'Khalil Gibran'},
  {'id': 9, 'quote': 'A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles.', 'saidBy': 'Christopher Reeve'},  
];

var generateRandomQuote = function() {
    var max = 9;
    var min = 0;
    var quoteID = Math.floor(Math.random() * (max - min + 1) + min);
    var theQuote = {
        'quoteText': quotes[quoteID]['quote'],
        'quoteSaidBy': quotes[quoteID]['saidBy']   
    }
    return theQuote;
};
var animateQuote = function(){   
    currentQuote = generateRandomQuote();
    $("#myQuote").css({opacity: 0});
    $("#myQuote").animate({'color': docColor, 'textAlign': 'center', opacity: 1}, 1000).html('"' + currentQuote.quoteText + '"');
    $("#saidBy").css({opacity: 0});
    $("#saidBy").animate({'color': docColor, opacity: 1}, 1000).html('- ' + currentQuote.quoteSaidBy);
};

var animatePageContent = function(){
    var page = $("#myPage");
    page.animate({'background-color': docColor}, 1000);
    $('.btnSocial').animate({'background-color': docColor, 'border-color': docColor}, 1000);
    $('.newQuoteBtn').animate({'background-color': docColor,  'border-color': docColor}, 1000).css({'color': '#FFF'});  
};

$("#twitterBtn").on('click', function(){
    var theTweet = '"' + currentQuote.quoteText + '" ' + currentQuote.quoteSaidBy;
    var tweetUrl = twitterUrl + theTweet;
    window.open(tweetUrl, '_blank');
});

$("#tumblrBtn").on('click',function(){
    var theTmblr = tumblrUrl + currentQuote.quoteSaidBy + "&content=" + currentQuote.quoteText;
    window.open(theTmblr, '_blank');
});