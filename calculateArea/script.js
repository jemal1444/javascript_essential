// script.js
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const product = document.getElementById('product').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Here, you would typically send the data to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Product:', product);
    console.log('Rating:', rating);
    console.log('Comments:', comments);

    // Display thank you message
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
});
