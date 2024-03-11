namespace JobsAPI.Models
{
    public enum JobField { TEACHING , TAXES, PROGRAMMING, KINDERGARDEN }
    public class Job

    {
        public JobField JobField { get; set; }
        public string JobName { get; set; }
        public string Area { get; set; }
        public string Requirements { get; set; }
        public bool Hybrid { get; set; }
        public int ScopeOfHours { get; set; }
    }
}
