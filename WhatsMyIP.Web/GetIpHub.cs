using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;

namespace WhatsMyIP.Web
{
  public class GetIpHub : Hub
  {
    public async Task<string> GetIp()
    {
      return await Clients.Others.GetIp();
    }
  }
}