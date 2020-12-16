using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AssetManagement.Models;
using System.Data.Entity;


namespace AssetManagement.Models
{
    [RoutePrefix("api/manager")]
    public class LoginController : ApiController
    {

        AssetManagementEntities DB = new AssetManagementEntities();
        [Route("Login")]
        [HttpPost]
        public IHttpActionResult Get(Login login)
        {
            var log = DB.Managers.Where(x => x.ManagerName.Equals(login.ManagerName) && x.Password.Equals(login.Password)).FirstOrDefault();

            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
            }
            else

                return Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });
        }
        [Route("Register")]
        [HttpPost]
        public object RegisterManager(Register Reg)
        {
            try
            {

                Manager mg = new Manager();
                if (mg.ManagerID == 0)
                {
                    mg.ManagerName = Reg.ManagerName;
                    mg.Password = Reg.Password;
                    mg.Mobile = Reg.Mobile;
                    mg.Address = Reg.Address;
                    
                    DB.Managers.Add(mg);
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

        [Route("ManagerDetailsID")]
        [HttpGet]
        public object ManagerDetails1(int id)
        {
            var obj = DB.Managers.Where(x => x.ManagerID == id).ToList().FirstOrDefault();
            return obj;
        }

        [Route("UpdateRequest")]
        [HttpPost]
        public object UpdateRequest(Register AA)
        {
            try
            {

                Manager RA = new Manager();
                var obj = DB.Managers.Where(z => z.ManagerID == AA.ManagerID).ToList().FirstOrDefault();
                //int x;
                if (obj.ManagerID > 0)
                {
                    obj.ManagerName = AA.ManagerName;
                    obj.Password = AA.Password;
                    obj.Mobile = AA.Mobile;

                    obj.Address = AA.Address;

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
    }
}
