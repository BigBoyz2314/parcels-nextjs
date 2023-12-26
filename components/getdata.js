
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get the value of the session_id parameter
const sessionId = urlParams.get('session_id');

  // Fetch data from the Stripe API
  fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer sk_test_51OPmXWHGDVzvQrZqNSxFm1sG1ZfE1p77mAgv8pNoAqyH6PXN3DkRpSnbwHYfxEaflF2WD3IuXg20jA7VWgvOy81500UzzjQf2M', // Replace 'YOUR_STRIPE_SECRET_KEY' with your actual secret key
    },
  })
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved data here
    console.log('Stripe Session Info:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });