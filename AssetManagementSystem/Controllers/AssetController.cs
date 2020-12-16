using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AssetManagement.Models;
using System.Data.Entity;

namespace AssetManagement.Controllers
{
    [RoutePrefix("api/Assets")]
    public class AssetController : ApiController
    {
        AssetManagementEntities DB = new AssetManagementEntities();

        

        [Route("InsertAsset")]
        [HttpPost]

        public object InsertAssets(AddAsset AA)
        {
            try
            {
                Asset A = new Asset();
                int x;
                if (A.AssetID == 0)
                {
                    A.AssetName = AA.AssetName;
                    A.Quantity = AA.Quantity;
                    A.Price = AA.Price;
                    x = A.Quantity * A.Price;
                    A.Total_Price = x;
                    
                    DB.Assets.Add(A);
                    DB.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "Asset SuccessFully Saved." };
                }
                //else
                //{
                //    //Asset A = new Asset();
                //    var obj = DB.Assets.Where(z => z.AssetID == AA.AssetID).ToList().FirstOrDefault();
                //    int y;
                //    if (obj.AssetID > 0)
                //    {
                //        obj.AssetName = AA.AssetName;
                //        obj.Quantity = AA.Quantity;
                //        obj.Price = AA.Price;
                //        y = obj.Quantity * obj.Price;
                //        obj.Total_Price = y;

                //        //DB.Assets.Add(obj);
                //        DB.SaveChanges();
                //        return new Response
                //        { Status = "Success", Message = "Asset SuccessFully Saved." };
                //    }
                //}
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }

        [Route("UpdateAsset")]
        [HttpPost]
        public object UpdateAssets(AddAsset AA)
        {
            try
            {
                //AddAsset AA = new AddAsset();
                Asset A1 = new Asset();
                var obj = DB.Assets.Where(z => z.AssetID == AA.AssetID).ToList().FirstOrDefault();
                int x;
                if (obj.AssetID > 0)
                {
                    obj.AssetName = AA.AssetName;
                    obj.Quantity = AA.Quantity;
                    obj.Price = AA.Price;
                    x = obj.Quantity * obj.Price;
                    obj.Total_Price = x;

                    //DB.Assets.Add(A);
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

        [Route("AssetDetails")]
        [HttpGet]
        public object AssetsDetails()
        {

            var a = DB.Assets.ToList();
            return a;
        }

        [HttpDelete]
        [Route("DeleteAsset")]
        public object DeleteAsset(int id)

        {

            var obj = DB.Assets.Where(x => x.AssetID == id).ToList().FirstOrDefault();

            DB.Assets.Remove(obj);

            DB.SaveChanges();

            return new Response
            {
                Status = "Delete",
                Message = "Delete Successfuly"
            };

        }
        [Route("AssetDetailsID")]
        [HttpGet]
        public object AssetsDetails(int id)
        {
            var obj = DB.Assets.Where(x => x.AssetID == id).ToList().FirstOrDefault();
            return obj;
        }

    }

   
}

