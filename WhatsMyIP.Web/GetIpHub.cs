using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;

namespace WhatsMyIP.Web
{
  public class GetIpHub : Hub
  {
    public void RetrieveIp()
    {
      Clients.Others.retrieveIp();
    }
    
    public void UpdateIp()
    {
      Clients.Others.updateIp(GetIpAddress());
    }

    private string GetIpAddress()
    {
      var ipAddress = string.Empty;
      object tempObject;
      Context.Request.Environment.TryGetValue("server.RemoteIpAddress", out tempObject);
      if (tempObject != null)
      {
        ipAddress = (string)tempObject;
      }
      return ipAddress;
    }
  }
}