const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes

app.get('/api/shopify', async (req, res) => {
  try {
    const fetch = await import('node-fetch');
    const shopifyUrl = 'https://e7bc76.myshopify.com/admin/api/2023-04/graphql.json';
    const accessToken = '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';

    const query = {
    query: `
    query GetProducts {
      products(first: 10) {
        edges {
          node {
            id
            title
            description
            productType
            variants(first: 1) {
              edges {
                node {
                  selectedOptions {
                    name
                    value
                  }
                  inventoryQuantity
                  price
                }
              }
            }
            images(first: 1) {
              edges {
                node {
                  originalSrc
                }
              }
            }
          }
        }
      }
    }
    `,
  };


    try {
      const response = await fetch.default(shopifyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': accessToken,
        },
        body: JSON.stringify(query),
      });

      if (!response.ok) {
        throw new Error(`GraphQL request failed with status ${response.status}`);
      }

      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Server Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/api/add-product', express.json(), async (req, res) => {
  try {
    const fetchModule = await import('node-fetch'); // Dynamic import
    const fetch = fetchModule.default; // Access the default export of the imported module
    const shopifyUrl = 'https://e7bc76.myshopify.com/admin/api/2023-04/graphql.json';
    const accessToken = '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';

    const query = {
      query: `
        mutation CreateProduct($input: ProductInput!) {
          productCreate(input: $input) {
            product {
              id
              title
              description
              variants(first: 1) {
                edges {
                  node {
                    selectedOptions {
                      name
                      value
                    }
                    inventoryQuantity
                    price
                  }
                }
              }
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                  }
                }
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
        input: {
          title: req.body.title,
          bodyHtml: req.body.description
          // Include other fields here
        },
      },
    };
    const response = await fetch(shopifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': accessToken,
      },
      body: JSON.stringify(query),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
