function openModal(event) {
    event.preventDefault();
    document.getElementById('reportModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('reportModal').style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    var modal = document.getElementById('reportModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}