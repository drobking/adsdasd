using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Base_Project817.DataAccess;
using Base_Project817.DTO.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Base_Project817.Api___Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly EFContext _context;
        public ProductController(EFContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public List<ProductDTO> getAllProduct()
        {
            return _context.Products.Select(t => new ProductDTO
            {
               
            }).ToList();
        }
    }
}
