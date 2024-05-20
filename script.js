function openModal(event) {
    event.preventDefault();
    document.getElementById('reportModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('reportModal').style.display = 'none';
}

function openEditProfileModal(event) {
    event.preventDefault();
    document.getElementById('editProfileModal').style.display = 'block';
}

function closeEditProfileModal() {
    document.getElementById('editProfileModal').style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    var reportModal = document.getElementById('reportModal');
    var editProfileModal = document.getElementById('editProfileModal');
    if (event.target == reportModal) {
        reportModal.style.display = 'none';
    }
    if (event.target == editProfileModal) {
        editProfileModal.style.display = 'none';
    }
}

document.getElementById('edit-profile-button').addEventListener('click', openEditProfileModal);
document.getElementById('editProfileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add the code to handle the form submission and update the profile info
    closeEditProfileModal();
});