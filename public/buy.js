// Get the itemId from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('itemId');

if (itemId) {
    // Fetch item details based on itemId (simulated here)
    // You can replace this with an actual API call to fetch the item details
    const itemData = fetchItemData(itemId);
    populateItemDetails(itemData);
}

function fetchItemData(itemId) {
    // Sample data (replace with actual API call or database query)
    const sampleItemData = {
        item_name: ,
        item_price: "500",
        item_quantity: "10",
        item_shortDescription: "A biodegradable bag made from sustainable materials.",
        item_basicDetails: "This bag is made from organic cotton and jute, perfect for everyday use.",
        seller_email: "seller@example.com",
        seller_contact: "9876543210",
        item_image: "https://via.placeholder.com/150"
    };
    return sampleItemData;
}

function populateItemDetails(itemData) {
    // Populate the item details into the HTML elements
    document.getElementById('itemName').textContent = itemData.item_name;
    document.getElementById('itemPrice').textContent = itemData.item_price;
    document.getElementById('itemQuantity').textContent = itemData.item_quantity;
    document.getElementById('itemShortDescription').textContent = itemData.item_shortDescription;
    document.getElementById('itemBasicDetails').textContent = itemData.item_basicDetails;
    document.getElementById('itemEmail').textContent = itemData.seller_email;
    document.getElementById('itemContact').textContent = itemData.seller_contact;
    document.getElementById('itemPhoto').src = itemData.item_image;
}

// Handle the review submission
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const reviewerName = document.getElementById('reviewerName').value;
    const reviewText = document.getElementById('reviewText').value;

    const reviewList = document.getElementById('reviewListDetails');
    const reviewEntry = document.createElement('li');

    reviewEntry.innerHTML = `
        <strong>${reviewerName}:</strong> ${reviewText}
    `;
    reviewList.appendChild(reviewEntry);

    // Reset the form
    document.getElementById('reviewForm').reset();
});

// Function for handling the 'Buy' button click
function buyItem() {
    alert("Thank you for your interest! The seller will contact you soon.");
    // You can redirect to a payment page or handle further actions as needed.
}
