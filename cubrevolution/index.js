var handler = StripeCheckout.configure({
  key: 'pk_test_sveqkCdHYEdXPgRMmPUAcDEl',
  image: 'http://bespto.info/wp-content/uploads/2014/07/bespto-logo-green.png',
  locale: 'auto',
  token: function(token) {
    // Use the token to create the charge with a server-side script.
    // You can access the token ID with `token.id`
  }
});

$('#pay').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'Cub Revolution',
    description: 'Brenham High School',
    amount: 2700,
    bitcoin: true,
    currency: 'usd'
  });
  e.preventDefault();
});

// Close Checkout on page navigation
$(window).on('popstate', function() {
  handler.close();
});
