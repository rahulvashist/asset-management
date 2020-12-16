using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AssetManagement.Models;

namespace AssetManagement.Controllers
{
           [RoutePrefix("api/AssetRequest")]
        public class AssetRequestController : ApiController
        {
        AssetManagementEntities DB = new AssetManagementEntities();
        [HttpPost]
            public object InsertAsset(AssetReq Req)
            {
                try
                {
                    //AssetsDBEntities DB=new AssetsDBEntities();

                    Request_assets R = new Request_assets();
                    if (R.RequestID == 0)
                    {
                        R.AssetName = Req.AssetName;
                        R.Quantity = Req.Quantity;
                        R.EmployeID = Req.EmployeID;
                        R.Status = "Pending";
                        R.MgrID = Req.MgrID;

                        DB.Request_assets.Add(R);
                        DB.SaveChanges();
                        return new Response
                        { Status = "Success", Message = "Record SuccessFully Saved." };
                    }
                }
                catch (Exception)
                {

                    throw;
                }
                return new Response
                { Status = "Error", Message = "Invalid Data." };
            }

            [Route("UpdateRequest")]
            [HttpPost]
            public object UpdateRequest(AssetReq AA)
            {
                try
                {

                    Request_assets R = new Request_assets();
                    var obj = DB.Request_assets.Where(z => z.RequestID == AA.RequestID).ToList().FirstOrDefault();
                    //int x;
                    if (obj.RequestID > 0)
                    {
                        obj.AssetName = AA.AssetName;
                        obj.Quantity = AA.Quantity;
                        obj.EmployeID = AA.EmployeID;
                        obj.Status = AA.Status;
                        obj.MgrID = AA.MgrID;
                        DB.SaveChanges();
                        return new Response
                        { Status = "Success", Message = "Asset SuccessFully Updated." };
                    }
                }
                catch (Exception)
                {

                    throw;
                }
                return new Response
                { Status = "Error", Message = "Invalid Data." };
            }

            [Route("AssetRequestDetails")]
            [HttpGet]
            public object AssetsRequestDetails1()
            {

                var a = DB.Request_assets.ToList();
                return a;
            }

            [Route("AssetRequestDetailsID")]
            [HttpGet]
            public object AssetsRequestDetails2(int id)
            {
                var obj = DB.Request_assets.Where(x => x.RequestID == id).ToList().FirstOrDefault();
                return obj;
            }

            [HttpDelete]
            [Route("DeleteRequest")]
            public object DeleteAsset(int id)

            {

                var obj = DB.Request_assets.Where(x => x.RequestID == id).ToList().FirstOrDefault();

                DB.Request_assets.Remove(obj);

                DB.SaveChanges();

                return new Response
                {
                    Status = "Delete",
                    Message = "Delete Successfuly"
                };

            }
        }
    }

