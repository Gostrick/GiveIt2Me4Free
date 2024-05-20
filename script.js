console.log("JavaScript file is loaded");

document.addEventListener('DOMContentLoaded', function() {
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
});

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

function openModal(event) {
    event.preventDefault();
    document.getElementById('reportModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('reportModal').style.display = 'none';
}

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