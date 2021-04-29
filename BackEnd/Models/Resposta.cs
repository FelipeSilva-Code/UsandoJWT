namespace BackEnd.Models
{
    public class Resposta
    {
        public string Message {get; set;}
        public int Codigo {get; set;}

        public Resposta (string msg, int cdg)
        {
            Message = msg;
            Codigo = cdg;
        }
    }
}