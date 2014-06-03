﻿$(function () {
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

    var key = $("#ip").attr("data-sharedKey");
    console.log("key: " + key);
    getIpHubProxy.server.retrieveIp(key);

  }).fail(function () {
    console.log("Could not connect");
  });
});