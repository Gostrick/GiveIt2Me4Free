console.log("JavaScript file is loaded");

document.addEventListener('DOMContentLoaded', function() {
    // Edit Profile Functionality
    const editProfileButton = document.getElementById('edit-profile-button');
    const editProfileModal = document.getElementById('editProfileModal');
    const editProfileForm = document.getElementById('editProfileForm');
    const closeBtn = document.querySelector('.close');

    if (editProfileButton) {
        console.log("Edit profile button found");
        editProfileButton.addEventListener('click', function(event) {
            event.preventDefault();
            console.log("Edit profile button clicked");
            editProfileModal.style.display = 'block';
        });
    } else {
        console.error("Edit profile button not found");
    }

    if (closeBtn) {
        console.log("Close button found");
        closeBtn.addEventListener('click', function() {
            editProfileModal.style.display = 'none';
        });
    } else {
        console.error("Close button not found");
    }

    if (editProfileForm) {
        console.log("Edit profile form found");
        editProfileForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle form submission logic
            console.log("Profile form submitted");
            editProfileModal.style.display = 'none';
        });
    } else {
        console.error("Edit profile form not found");
    }

    window.onclick = function(event) {
        if (event.target == editProfileModal) {
            editProfileModal.style.display = 'none';
        }
    }

    // Chat Functionality
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get('user');
    const chatWithElement = document.getElementById('chat-with');
    if (chatWithElement && user) {
        chatWithElement.textContent = user;
    }

    const chatForm = document.querySelector('.chat-form');
    if (chatForm) {
        chatForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const chatInput = document.getElementById('chat-input');
            const messageText = chatInput.value.trim();
            if (messageText) {
                const message = document.createElement('div');
                message.classList.add('message', 'sent');
                message.innerHTML = `<p>${messageText}</p><span class="timestamp">Just now</span>`;
                document.querySelector('.chat-box').appendChild(message);
                chatInput.value = '';
            }
        });
    }

    // Search Functionality
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const offers = document.querySelectorAll('.offer');

        offers.forEach(function(offer) {
            const title = offer.querySelector('h2').textContent.toLowerCase();
            const description = offer.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                offer.style.display = 'block';
            } else {
                offer.style.display = 'none';
            }
        });
    });

    // Report Modal Functionality
    window.openModal = function(event) {
        event.preventDefault();
        document.getElementById('reportModal').style.display = 'block';
    }

    window.closeModal = function() {
        document.getElementById('reportModal').style.display = 'none';
    }

    // Notification Counter Functionality
    function updateNotificationCounter(count) {
        var notifCounter = document.getElementById('notif-counter');
        if (notifCounter) {
            if (count > 0) {
                notifCounter.textContent = count;
                notifCounter.classList.add('show');
            } else {
                notifCounter.classList.remove('show');
            }
        } else {
            console.error("Notification counter element not found");
        }
    }

    // Function is called just to show that notification could be changed dynamically
    updateNotificationCounter(3);

    // Upload Item Modal Functionality
    const uploadItemButton = document.getElementById('upload-item-button');
    const uploadItemModal = document.getElementById('uploadItemModal');
    const closeUploadBtn = document.querySelector('.close');

    if (uploadItemButton) {
        console.log("Upload item button found");
        uploadItemButton.addEventListener('click', function() {
            console.log("Upload item button clicked");
            uploadItemModal.style.display = 'block';
        });
    } else {
        console.error("Upload item button not found");
    }

    if (closeUploadBtn) {
        console.log("Close button for upload modal found");
        closeUploadBtn.addEventListener('click', function() {
            uploadItemModal.style.display = 'none';
        });
    } else {
        console.error("Close button for upload modal not found");
    }

    window.onclick = function(event) {
        if (event.target == uploadItemModal) {
            uploadItemModal.style.display = 'none';
        }
    }

    document.getElementById('uploadItemForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Here should be added functionaliy for uploading item when the webserver and backend part will be implemented
        alert('Item uploaded successfully!');
        uploadItemModal.style.display = 'none';
    });
});
