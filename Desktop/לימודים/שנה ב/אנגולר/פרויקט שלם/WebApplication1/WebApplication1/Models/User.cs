using JobsAPI.Models;

namespace API.Models
{
    public class User
    {
       //משתמש: מזהה, שם משתמש, סיסמה, תחום חיפוש עבודה.
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public JobField JobField { get; set; }
    }
}