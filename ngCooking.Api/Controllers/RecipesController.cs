using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ngCooking.Api.Models;
using System.Web.Http.Cors;

namespace ngCooking.Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RecipesController : ApiController
    {
        private CookingContext db = new CookingContext();

        // GET: api/Recipes
        public IEnumerable<Recipe> GetRecipes()
        {
            return db.Recipes.Include(r => r.IngredientList).AsQueryable().Include(r => r.Comments).AsEnumerable();
        }

        // GET: api/Recipes/5
        [ResponseType(typeof(Recipe))]
        public IHttpActionResult GetRecipe(string id)
        {
            Recipe recipe = db.Recipes
                .Include(r => r.IngredientList)
                .Include(r => r.Comments)
                .Include(x => x.Comments.Select(y => y.Community))
                .SingleOrDefault(r => r.Id == id);
            if (recipe == null)
            {
                return NotFound();
            }

            return Ok(recipe);
        }

        // PUT: api/Recipes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRecipe(string id, Recipe recipe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != recipe.Id)
            {
                return BadRequest();
            }

            db.Entry(recipe).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Recipes
        [ResponseType(typeof(Recipe))]
        public IHttpActionResult PostRecipe(Recipe recipe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            recipe.Id = recipe.Name.ToLowerInvariant().Replace(' ', '-');
            recipe.Community = db.Communities.Where(x => x.Id == recipe.CreatorId).FirstOrDefault();
            var ingredients = recipe.IngredientList;
            recipe.IngredientList = new List<Ingredient>();
            foreach (var item in ingredients)
            {
                var i = db.Ingredients.Where(x => x.Id == item.Id).Include(x=>x.Categorie).FirstOrDefault();
                recipe.IngredientList.Add(i);
            }

            db.Recipes.Add(recipe);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {

                if (RecipeExists(recipe.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            catch (System.Data.Entity.Validation.DbEntityValidationException e)
            {
                foreach (var eve in e.EntityValidationErrors)
                {
                    System.Diagnostics.Debug.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                        eve.Entry.Entity.GetType().Name, eve.Entry.State);
                    foreach (var ve in eve.ValidationErrors)
                    {
                        System.Diagnostics.Debug.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
                            ve.PropertyName, ve.ErrorMessage);
                    }
                }
                throw;
            }

            return CreatedAtRoute("DefaultApi", new { id = recipe.Id }, recipe);
        }

        // DELETE: api/Recipes/5
        [ResponseType(typeof(Recipe))]
        public IHttpActionResult DeleteRecipe(string id)
        {
            Recipe recipe = db.Recipes.Find(id);
            if (recipe == null)
            {
                return NotFound();
            }

            db.Recipes.Remove(recipe);
            db.SaveChanges();

            return Ok(recipe);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RecipeExists(string id)
        {
            return db.Recipes.Count(e => e.Id == id) > 0;
        }
    }
}