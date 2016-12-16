using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ngCooking.Api.Models
{
    [DataContract]
    public class Community
    {
        public Community()
        {
            Comments = new List<Comment>();
            Recipes = new List<Recipe>();
        }
        [DataMember(Name ="id")]
        public int Id { get; set; }
        [DataMember(Name = "firstname")]
        public string FirstName { get; set; }
        [DataMember(Name = "surname")]
        public string Surname { get; set; }

        [DataMember(Name = "email")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [DataType(DataType.Password)]
        [DataMember(Name = "password")]
        public string Password { get; set; }

        [Range(1, 3)]
        [DataMember(Name = "level")]
        public short Level { get; set; }
        [Range(1, 5)]
        [DataMember(Name ="note")]
        public short Note { get; set; }
        [Range(1, 5)]
        [DataMember(Name = "prod")]
        public short Prod { get; set; }
        [DataType(DataType.ImageUrl)]
        [DataMember(Name = "picture")]
        public string Picture { get; set; }
        [DataMember(Name = "city")]
        public string City { get; set; }
        [Range(1900, 2000)]
        [DataMember(Name = "birth")]
        public int Birth { get; set; }
        [DataMember(Name = "bio")]
        public string Bio { get; set; }

        [JsonIgnore]
        [IgnoreDataMember]
        public virtual ICollection<Comment> Comments { get; set; }
        [JsonIgnore]
        [IgnoreDataMember]
        public virtual ICollection<Recipe> Recipes { get; set; }

    }
}