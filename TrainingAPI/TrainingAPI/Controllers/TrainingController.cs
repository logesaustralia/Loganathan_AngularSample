using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TrainingAPI.Models;

namespace TrainingAPI.Controllers
{
    public class TrainingController : ApiController
    {
        
        public HttpResponseMessage Post([FromBody] TrainingModel TM)
        {
            try
            {
                TrainingInfo otInfo = new TrainingInfo();

                otInfo.TrainingName = TM.sTrainingName;
                otInfo.StartDate = TM.stDate;
                otInfo.EndDate = TM.endDate;

                TrainingDBEntities oDBContext = new TrainingDBEntities();
                oDBContext.TrainingInfoes.Add(otInfo);
                oDBContext.SaveChanges();
                TimeSpan t = TM.endDate - TM.stDate;
                TM.NumberofDays = t.TotalDays.ToString();
                
                return Request.CreateResponse(HttpStatusCode.Created, TM);
            }
            catch(Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        } 
    }
}
