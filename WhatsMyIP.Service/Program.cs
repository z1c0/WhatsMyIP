using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace WhatsMyIP.Service
{
  static class Program
  {
    static void Main()
    {
      var serviceToRun = new MyIpService();
      if (Environment.UserInteractive)
      {
        serviceToRun.Start();
        serviceToRun.Stop();
      }
      else
      {
        ServiceBase.Run(serviceToRun);
      }
    }
  }
}
