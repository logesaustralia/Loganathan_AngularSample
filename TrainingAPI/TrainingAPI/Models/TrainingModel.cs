using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrainingAPI.Models
{
    public class TrainingModel
    {
        public string sTrainingName { get; set; }
        public DateTime stDate { get; set; }
        public DateTime endDate { get; set; }

        public string NumberofDays { get; set; }
    }
}