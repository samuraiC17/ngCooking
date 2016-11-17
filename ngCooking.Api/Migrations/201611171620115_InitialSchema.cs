namespace ngCooking.Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialSchema : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        NameToDisplay = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Ingredients",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        IsAvailable = c.Boolean(nullable: false),
                        Picture = c.String(),
                        Calories = c.Int(nullable: false),
                        Description = c.String(),
                        Categorie_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Categories", t => t.Categorie_Id)
                .Index(t => t.Categorie_Id);
            
            CreateTable(
                "dbo.Recipes",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        CreatorId = c.Int(nullable: false),
                        TimeStamp = c.Long(nullable: false),
                        IsAvailable = c.Boolean(nullable: false),
                        Picture = c.String(),
                        Calories = c.Int(nullable: false),
                        Note = c.Short(nullable: false),
                        Preparation = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Communities", t => t.CreatorId, cascadeDelete: true)
                .Index(t => t.CreatorId);
            
            CreateTable(
                "dbo.Comments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(),
                        Title = c.String(),
                        Content = c.String(),
                        Mark = c.Short(nullable: false),
                        Recipe_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Communities", t => t.UserId)
                .ForeignKey("dbo.Recipes", t => t.Recipe_Id)
                .Index(t => t.UserId)
                .Index(t => t.Recipe_Id);
            
            CreateTable(
                "dbo.Communities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        Surname = c.String(),
                        Email = c.String(),
                        Password = c.String(),
                        Level = c.Short(nullable: false),
                        Note = c.Short(nullable: false),
                        Prod = c.Short(nullable: false),
                        Picture = c.String(),
                        City = c.String(),
                        Birth = c.Int(nullable: false),
                        Bio = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.RecipeIngredients",
                c => new
                    {
                        Recipe_Id = c.String(nullable: false, maxLength: 128),
                        Ingredient_Id = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.Recipe_Id, t.Ingredient_Id })
                .ForeignKey("dbo.Recipes", t => t.Recipe_Id, cascadeDelete: true)
                .ForeignKey("dbo.Ingredients", t => t.Ingredient_Id, cascadeDelete: true)
                .Index(t => t.Recipe_Id)
                .Index(t => t.Ingredient_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.RecipeIngredients", "Ingredient_Id", "dbo.Ingredients");
            DropForeignKey("dbo.RecipeIngredients", "Recipe_Id", "dbo.Recipes");
            DropForeignKey("dbo.Comments", "Recipe_Id", "dbo.Recipes");
            DropForeignKey("dbo.Recipes", "CreatorId", "dbo.Communities");
            DropForeignKey("dbo.Comments", "UserId", "dbo.Communities");
            DropForeignKey("dbo.Ingredients", "Categorie_Id", "dbo.Categories");
            DropIndex("dbo.RecipeIngredients", new[] { "Ingredient_Id" });
            DropIndex("dbo.RecipeIngredients", new[] { "Recipe_Id" });
            DropIndex("dbo.Comments", new[] { "Recipe_Id" });
            DropIndex("dbo.Comments", new[] { "UserId" });
            DropIndex("dbo.Recipes", new[] { "CreatorId" });
            DropIndex("dbo.Ingredients", new[] { "Categorie_Id" });
            DropTable("dbo.RecipeIngredients");
            DropTable("dbo.Communities");
            DropTable("dbo.Comments");
            DropTable("dbo.Recipes");
            DropTable("dbo.Ingredients");
            DropTable("dbo.Categories");
        }
    }
}
