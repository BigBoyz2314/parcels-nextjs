// /pages/api/auth/createAccountAfterPayment.js

import { ManagementClient } from 'auth0'; // Assuming you're using the 'auth0' package

const auth0 = new ManagementClient({
  domain: `${process.env.AUTH0_DOMAIN}`,
  clientId: `${process.env.AUTH0_CLIENT_ID}`,
  clientSecret: `${process.env.AUTH0_CLIENT_SECRET}`,
  scope: 'create:users'
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, subscriptionId } = req.body; // Assuming you're sending email and subscriptionId in the request body

      // Create a user in Auth0
      await createUserInAuth0(email, subscriptionId);

      res.status(200).json({ message: 'Auth0 user created successfully' });
    } catch (error) {
      console.error('Error creating Auth0 user:', error);
      res.status(500).json({ error: 'Failed to create Auth0 user' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed if it's not a POST request
  }
}

// Function to create a user in Auth0
async function createUserInAuth0(email, subscriptionId) {
  try {
    await auth0.createUser({
      email,
      app_metadata: {
        subscriptionId
        // Add other metadata as needed
      }
    });
    console.log('User created in Auth0');
  } catch (error) {
    console.error('Error creating Auth0 user:', error);
    throw new Error('Failed to create user in Auth0');
  }
}
