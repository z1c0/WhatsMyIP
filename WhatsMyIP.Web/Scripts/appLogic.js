$(function () {
  console.log("ready");

  var getIpHubProxy = $.connection.getIpHub;

  getIpHubProxy.client.retrieveIp = function (requestedKey) {
    if ($("#option_publish").prop("checked")) {
      console.log("requested key: " + requestedKey);
      var key = $('#textKeyForIp').val();
      if (key === requestedKey) {
        getIpHubProxy.server.updateIp();
      }

    }
  };
  getIpHubProxy.client.updateIp = function (ip) {
    $("#ip").text(ip);
  };

  $.connection.hub.start().done(function () {
    console.log("Now connected, connection ID=" + $.connection.hub.id);

    $("#btnIp").click(function () {

      if ($("#option_publish").prop("checked")) {
        $("#ip").text("Published IP");
      }
      else {
        $("#ip").text("... retrieving IP");
      }
      var key = $('#textKeyForIp').val();
      console.log("key: " + key);
      getIpHubProxy.server.retrieveIp(key);
      return false;
    });

  }).fail(function () {
    console.log("Could not connect");
  });
});