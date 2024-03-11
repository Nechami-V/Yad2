using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Collections.Generic;
using JobsAPI.Models;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> allPeople = new List<User>() 
        { 
            new User { Id = 1, UserName = "Avi", Password = "01/01/2000",JobField=JobField.PROGRAMMING },
            new User { Id =  2, UserName = "Coig", Password = "01/01/2000",JobField=JobField.KINDERGARDEN },
            new User { Id = 3, UserName = "Dini", Password = "12345678",JobField=JobField.PROGRAMMING }

        };
    //// GET: api/<PersonController>
    //[HttpGet("GetPersons")]
    //    public List<User> Get()
    //    {
    //        return allPeople;
    //    }

        // GET api/<PersonController>/5
        [HttpGet("{name},{password}")]
        public User Get(string password,string name)
        {
            return allPeople.FirstOrDefault(u => u.Password.Equals(password) && u.UserName.Equals(name));
        }

        //// POST api/<PersonController>
        //[HttpPost("AddPerson")]
        //public void Post([FromBody] User newPerson)
        //{
        //    allPeople.Add(newPerson);
        //}

        //// PUT api/<PersonController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<PersonController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
