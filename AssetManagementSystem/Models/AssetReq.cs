using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssetManagement.Models
{
    public class AssetReq
    {
       public int RequestID { get; set; }
        public string AssetName { get; set; }

        public int Quantity { get; set; }

        public int EmployeID { get; set; }

        public string Status { get; set; }

        public int MgrID { get; set; }
    }
}