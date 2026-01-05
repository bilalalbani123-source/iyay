// Fungsi modal pop-up untuk semua proyek
function bukaModal(judul, gambar, deskripsi) {
  const modalTitle = document.getElementById('projectModalLabel');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-desc');

  modalTitle.innerText = judul;
  modalImg.src = gambar;
  modalDesc.innerText = deskripsi;

  // Tampilkan modal menggunakan Bootstrap
  const modal = new bootstrap.Modal(document.getElementById('projectModal'));
  modal.show();
}
