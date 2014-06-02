using Microsoft.AspNet.SignalR.Client;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;

namespace WhatsMyIP.Service
{
  public partial class MyIpService : ServiceBase
  {
    private HubConnection _hubConnection;

    public MyIpService()
    {
      InitializeComponent();
    }

    internal void Start()
    {
      OnStart(null);      
    }

    protected async override void OnStart(string[] args)
    {
      _hubConnection = new HubConnection("http://whatsmypublicip.azurewebsites.net/");
      var hubProxy = _hubConnection.CreateHubProxy("GetIpHub");
      hubProxy.On("retrieveIp", () => hubProxy.Invoke("UpdateIp"));
      await _hubConnection.Start();
    }    

    protected override void OnStop()
    {
      if (_hubConnection != null)
      {
        _hubConnection.Dispose();
      }
    }
  }
}
