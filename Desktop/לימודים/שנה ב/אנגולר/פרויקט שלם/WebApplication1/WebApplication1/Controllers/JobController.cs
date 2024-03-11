using Microsoft.AspNetCore.Mvc;
using JobsAPI.Models;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SalselaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
       
        //public string Area { get; set; }
        //public string Requirements { get; set; }
        //public bool Hybrid { get; set; }
        //public int ScopeOfHours { get; set; }
        public static List<Job> allJobs = new List<Job>() 
        { 
            new Job { JobField = JobField.KINDERGARDEN, JobName = "ה" , Area = "1", Requirements = "blabla", Hybrid = false, ScopeOfHours = 120},
            new Job { JobField = JobField.PROGRAMMING, JobName = "ג" , Area = "1", Requirements = "blabla", Hybrid = true, ScopeOfHours = 120},
        };

//      GET: api/<JobController>
        [HttpGet("GetJobs")]
        public List<Job> Get()
        {
            return allJobs;
        }

        //// GET api/<BookController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<BookController>
        //[HttpPost("AddBook")]
        //public void Post([FromBody] Job newBook)
        //{
        //    allJobs.Add(newBook);
        //}

        //// PUT api/<BookController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<BookController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
