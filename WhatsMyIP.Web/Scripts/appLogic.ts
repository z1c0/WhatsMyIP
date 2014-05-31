var connection = $.hubConnection();
var getIpHubProxy = connection.createHubProxy('getIpHub');
//contosoChatHubProxy.on('addContosoChatMessageToPage', function(userName, message) {
//    console.log(userName + ' ' + message);
//});
connection.start()
    .done(function(){ console.log('Now connected, connection ID=' + connection.id); })
    .fail(function () { console.log('Could not connect'); });
