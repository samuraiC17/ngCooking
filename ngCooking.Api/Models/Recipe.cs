using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ngCooking.Api.Models
{
    [DataContract]
    public class Recipe
    {
        public Recipe()
        {
            IngredientList = new List<Ingredient>();
            Comments = new List<Comment>();
        }

        [System.ComponentModel.DataAnnotations.Key]
        [DataMember(Name = "id")]
        public string Id { get; set; }
        [DataMember(Name = "name")]
        public string Name { get; set; }
        [DataMember(Name = "creatorId")]
        public int CreatorId { get; set; }
        [DataMember(Name = "timestamp")]
        public long TimeStamp { get; set; }
        [DataMember(Name = "isAvailable")]
        public bool IsAvailable { get; set; }
        [DataMember(Name = "picture")]
        public string Picture { get; set; }
        [DataMember(Name = "calories")]
        public int Calories { get; set; }
        [DataMember(Name = "note")]
        public short Note { get; set; }
        [DataMember(Name = "preparation")]
        public string Preparation { get; set; }

        [DataMember(Name = "countComment")]
        [NotMapped]
        public int CountComment { get { return Comments.Count; } }

        [DataMember(Name = "ingredients")]
        [NotMapped]
        public ICollection<string> IngredientsNames { get { return IngredientList.Select(x => x.Name).ToList(); } }

        //[JsonIgnore]
        //[IgnoreDataMember]
        [DataMember(Name = "ingredientsList")]
        public virtual ICollection<Ingredient> IngredientList { get; set; }
        [DataMember(Name = "comments")]
        public virtual ICollection<Comment> Comments { get; set; }
        [ForeignKey("CreatorId")]
        [JsonIgnore]
        [IgnoreDataMember]
        public virtual Community Community { get; set; }
    }
}
