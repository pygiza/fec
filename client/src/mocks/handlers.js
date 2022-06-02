// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),

  // Handles a GET /user request
  rest.get('/reviews/meta', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const productId = req.url.searchParams.get('product_id');
    console.log(productId);
    
    let product = {
      "id": 37311,
      "campus": "hr-rfe",
      "name": "Camo Onesie",
      "slogan": "Blend in to your crowd",
      "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      "category": "Jackets",
      "default_price": "140.00",
      "created_at": "2021-08-13T14:37:33.145Z",
      "updated_at": "2021-08-13T14:37:33.145Z"
    } 
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: product,
      }),
    )
  }),
]