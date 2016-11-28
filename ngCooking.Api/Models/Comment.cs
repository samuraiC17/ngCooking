using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ngCooking.Api.Models
{
    [DataContract]
    public class Comment
    {
        [DataMember(Name = "id")]
        public int Id { get; set; }

        [NotMapped]
        [DataMember(Name = "recipeId")]
        public string RecipeId { get; set; }
        [DataMember(Name = "userId")]
        public int? UserId { get; set; }
        [DataMember(Name = "userName")]
        [NotMapped]
        public string UserName { get { return Community != null ? String.Format("{0} {1}", Community.FirstName, Community.Surname) : String.Empty; } }
        [DataMember(Name = "title")]
        public string Title { get; set; }
        [DataMember(Name = "comment")]
        public string Content { get; set; }
        [Range(1, 5)]
        [DataMember(Name = "mark")]
        public short Mark { get; set; }

        [JsonIgnore]
        [IgnoreDataMember]
        public Recipe Recipe { get; set; }
        [ForeignKey("UserId")]
        [JsonIgnore]
        [IgnoreDataMember]
        public Community Community { get; set; }
    }
}