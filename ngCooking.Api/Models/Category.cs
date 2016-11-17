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
    public class Category
    {
        public Category()
        {
            Ingredients = new List<Ingredient>();
        }
        [DataMember(Name ="id")]
        public string Id { get; set; }
        [DataMember(Name = "nameToDisplay")]
        public string NameToDisplay { get; set; }

        [JsonIgnore]
        [IgnoreDataMember]
        public ICollection<Ingredient> Ingredients { get; set; }
    }
}