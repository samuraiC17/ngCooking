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
        [DataMember(Name ="id")]
        public int Id { get; set; }
        [DataMember(Name = "userId")]
        public int? UserId { get; set; }
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