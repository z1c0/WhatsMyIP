$(function () {
  console.log("ready");

  var getIpHubProxy = $.connection.getIpHub;

  getIpHubProxy.client.retrieveIp = function () {
    console.log("retrieveIp called");
  };
  getIpHubProxy.client.updateIp = function (ip) {
    $("#ip").text(ip);
  };

  $.connection.hub.start().done(function () {
    console.log("Now connected, connection ID=" + $.connection.hub.id);

    getIpHubProxy.server.retrieveIp();

  }).fail(function () {
    console.log("Could not connect");
  });
});