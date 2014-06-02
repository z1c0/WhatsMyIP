using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Owin;

namespace WhatsMyIP.Web
{
  [assembly: OwinStartup(typeof(Startup))]
  public class Startup
  {
    public void Configuration(IAppBuilder app)
    {
      app.MapSignalR(new HubConfiguration()
      {
        //EnableJavaScriptProxies = false
      });
    }
  }
}