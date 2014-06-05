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

    $("#btnIp").click(function () {
      $("#ip").text("... retrieving IP");
      var key = $('#textKeyForIp').val();
      console.log("key: " + key);
      getIpHubProxy.server.retrieveIp(key);
      return false;
    });

  }).fail(function () {
    console.log("Could not connect");
  });
});