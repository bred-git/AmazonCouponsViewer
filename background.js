window.onload = function(){
    var url = "http://codebears.com/releases/deals.json";
    var count=0;
    
    $.getJSON( url, function( data ) {
        count=data.length;
        console.log(data);
        localStorage["req"]=JSON.stringify(data);
        localStorage["count"]=String(count);
    });

    
    chrome.tabs.onUpdated.addListener(function(id,info,tab) {
        checkTab(tab, count);
    });
    
    chrome.tabs.onActivated.addListener(function(info) {
        var tab = chrome.tabs.get(info.tabId, function(tab) {
            checkTab(tab,count);
        });
    }); 
};

function checkTab(tab, count) {
    if (tab.url.includes('amazon.com') && count>0) {
        chrome.browserAction.setPopup({popup:"popup.html"});
        chrome.browserAction.setBadgeText({text:String(count)});
    } else {
        chrome.browserAction.setPopup({popup:"pop.html"});
        chrome.browserAction.setBadgeText({text:""});
    }
}