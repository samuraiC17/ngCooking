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
    public class Ingredient
    {
        public Ingredient()
        {
            Recipes = new List<Recipe>();
        }
        [DataMember(Name ="id")]
        public string Id { get; set; }
        [DataMember(Name = "name")]
        public string Name { get; set; }
        [DataMember(Name = "isAvailable")]
        public bool IsAvailable { get; set; }
        [DataMember(Name = "picture")]
        [DataType(DataType.ImageUrl)]
        public string Picture { get; set; }
        [DataMember(Name = "category")]
        public string Category { get { return Categorie.Id; } }
        [DataMember(Name = "calories")]
        [Range(1, 1000)]
        public int Calories { get; set; }
        [DataMember(Name = "description")]
        public string Description { get; set; }

        [JsonIgnore]
        [IgnoreDataMember]
        public Category Categorie { get; set; }
        [JsonIgnore]
        [IgnoreDataMember]
        public virtual ICollection<Recipe> Recipes { get; set; }
    }
}