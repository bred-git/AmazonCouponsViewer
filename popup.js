function createDiv (item) {
    var result = '';
    result += '<a href="' + item.url + '" target="_blank" ><div>';
    
    result += '<h3 class="ititle">' + item.title + '...</h3>';
    
    if (String(item.url).includes('\/b\/')) {
        result += '<h4 class="osale"> Online sale </h4>';
    } else {
        result += '<h4 class="ocoupon"> Online coupon </h4>';
    }
    
    result += '</div></a>';
    return result;
} 

$(document).ready(function(){
    var counter= localStorage["count"] + " coupons available";
    $("#counter").text(counter);
    var data = JSON.parse(localStorage["req"]);
    var items = [];
    console.log(data);
    $.each(data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + createDiv(val) + "</li>" );
    });
            
    $( "<ul/>", {
        "id": "navbar",
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "body" );
 });