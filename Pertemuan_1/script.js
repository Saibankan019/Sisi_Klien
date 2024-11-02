// Function to show modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Function to open 'Tambah Mahasiswa' modal
document.getElementById('btnTambah').addEventListener('click', function () {
    openModal('modalTambah');
});

// Function to open 'Edit Mahasiswa' modal with pre-filled data
function openEditModal(nim, nama) {
    document.getElementById('editNim').value = nim;
    document.getElementById('editNama').value = nama;
    openModal('modalEdit');
}

// Function to confirm deletion
function confirmDelete(nim) {
    openModal('modalHapus');
    document.getElementById('confirmDeleteBtn').onclick = function () {
        alert('Data mahasiswa dengan NIM ' + nim + ' telah dihapus.');
        closeModal('modalHapus');
    };
}

// Close modals when clicking outside modal content
window.onclick = function (event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
};
