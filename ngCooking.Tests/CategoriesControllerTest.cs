using System;
using System.Collections.Generic;
using ngCooking.Api.Models;
using ngCooking.Api.Controllers;
using System.Web.Http.Results;
using NUnit.Framework;

namespace ngCooking.Tests
{
    [TestFixture]
    public class CategoriesControllerTest
    {
        [Test]
        public void GetCategories_ShouldReturnAllCategories()
        {
            var controller = new CategoriesController(GetTestCategories());

            var result = controller.GetCategories() as List<Category>;
            Assert.AreEqual(12, result.Count);
        }

        [Test]
        public void GetCategory_ShouldReturnCorrectCategory()
        {
            var controller = new CategoriesController(GetTestCategories());

            var result = controller.GetCategory("alcohol") as OkNegotiatedContentResult<Category>;
            Assert.IsNotNull(result);
            Assert.AreEqual("Alcools", result.Content.NameToDisplay);
        }

        private List<Category> GetTestCategories()
        {
            var testCategories = new List<Category>();

            testCategories.Add(new Category { Id = "*", NameToDisplay = "Toutes les catégories" });
            testCategories.Add(new Category { Id = "alcohol", NameToDisplay = "Alcools" });
            testCategories.Add(new Category { Id = "cereal", NameToDisplay = "Céréales" });
            testCategories.Add(new Category { Id = "cheese", NameToDisplay = "Fromages" });
            testCategories.Add(new Category { Id = "dairy-product", NameToDisplay = "Produits laitiers" });
            testCategories.Add(new Category { Id = "drink", NameToDisplay = "Boissons" });
            testCategories.Add(new Category { Id = "fish", NameToDisplay = "Poissons" });
            testCategories.Add(new Category { Id = "fruit", NameToDisplay = "Fruits" });
            testCategories.Add(new Category { Id = "meat", NameToDisplay = "Viandes" });
            testCategories.Add(new Category { Id = "other", NameToDisplay = "Autre" });
            testCategories.Add(new Category { Id = "seafood", NameToDisplay = "Fruits de mer" });
            testCategories.Add(new Category { Id = "vegetable", NameToDisplay = "Légumes" });

            return testCategories;
        }
    }
}
