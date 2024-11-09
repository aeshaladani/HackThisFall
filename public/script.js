document.addEventListener("DOMContentLoaded", function () {
    // Check if we are on the 'sell.html' page and handle form submission
    if (document.getElementById("itemForm")) {
        document.getElementById("itemForm").addEventListener("submit", async function (event) {
            event.preventDefault();

            // Get form elements
            const itemName = document.getElementById("itemName").value;
            const itemQuantity = document.getElementById("itemQuantity").value;
            const itemPrice = document.getElementById("itemPrice").value;
            const itemDescription = document.getElementById("itemDescription").value;
            const itemDetails = document.getElementById("itemDetails").value;
            const email = document.getElementById("Email").value;
            const contact = document.getElementById("Contact").value;
            const itemImage = document.getElementById("itemImage").files[0];

            // Prepare form data to send to backend
            const formData = new FormData();
            formData.append("itemName", itemName);
            formData.append("itemQuantity", itemQuantity);
            formData.append("itemPrice", itemPrice);
            formData.append("itemDescription", itemDescription);
            formData.append("itemDetails", itemDetails);
            formData.append("email", email);
            formData.append("contact", contact);
            formData.append("itemImage", itemImage);

            // Send form data to backend
            try {
                const response = await fetch("/submit", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    alert("Item submitted successfully!");
                    document.getElementById("itemForm").reset();
                    // Optionally refresh items list after submission
                    fetchItems();
                } else {
                    alert("Error submitting item.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Error submitting item.");
            }
        });
    }

    // Fetch and display items if the item list container is present
    if (document.getElementById("itemListDetails")) {
        fetchItems();
    }
});

// Function to fetch and display items
async function fetchItems() {
    try {
        const response = await fetch("/items"); // Assuming this fetches the list of items from your server
        const items = await response.json();

        const itemList = document.getElementById("itemListDetails");
        itemList.innerHTML = "";  // Clear the list first

        items.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("item-card");  // Add class for item styling

            itemElement.innerHTML = `
                <div class="item-image-container">
                    ${
                        item.itemImagePath 
                            ? `<img src="/${item.itemImagePath}" alt="${item.itemName}" class="item-image">` 
                            : ""
                    }
                </div>
                <h3>${item.itemName}</h3>
                <p><strong>Quantity:</strong> ${item.itemQuantity}</p>
                <p><strong>Price:</strong> ₹${item.itemPrice}</p>
                <p><strong>Description:</strong> ${item.itemDescription}</p>
                <p><strong>Details:</strong> ${item.itemDetails}</p>
                <p><strong>Email:</strong> ${item.email}</p>
                <p><strong>Contact:</strong> ${item.contact}</p>
            `;
            itemList.appendChild(itemElement);
        });
    } catch (error) {
        console.error("Error fetching items:", error);
    }
}

// Fetch and display items when the page is loaded
document.addEventListener("DOMContentLoaded", fetchItems);
