document.getElementById('itemForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemDetails = document.getElementById('itemDetails').value;
    const itemImage = document.getElementById('itemImage').files[0];
  
    if (itemImage) {
        const reader = new FileReader();
        reader.onloadend = function() {
            const itemList = document.getElementById('itemListDetails');
            const itemEntry = document.createElement('li');
  
            itemEntry.innerHTML = `
                <div>
                    <img src="${reader.result}" alt="Item Photo">
                    <strong>${itemName}</strong><br>
                    Price: ₹${itemPrice}<br>
                    Description: ${itemDescription}<br>
                    Details: ${itemDetails}
                </div>
            `;
            itemList.appendChild(itemEntry);
  
            // Reset the form
            document.getElementById('itemForm').reset();
        };
        reader.readAsDataURL(itemImage);
    }
  });
  
  
  
  