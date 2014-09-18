chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.create({
    url: "panel.html",
    top: 600,
    left: 400,
    width: 480,
    height: 400,
    type: 'detached_panel',
    focused : true,
//    frame: 'none'
  });
});