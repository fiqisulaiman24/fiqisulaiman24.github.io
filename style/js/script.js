document.addEventListener('DOMContentLoaded', function() {
    const tahun_sekarang = new Date().getFullYear();
    const tahun = document.getElementById('tahun_sekarang');
    if (tahun) {
        tahun.textContent = tahun_sekarang;
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".vx-portfolio-column");
  const seeMoreBtn = document.getElementById("seeMore");
  const seeGithubBtn = document.getElementById("seeGithub");
  let visibleCount = 4;

  // Sembunyikan semua item di luar batas awal
  items.forEach((item, index) => {
    if (index >= visibleCount) {
      item.style.display = "none";
    }
  });

  // Sembunyikan tombol GitHub di awal
  seeGithubBtn.style.display = "none";

  // Event klik tombol "See More"
  seeMoreBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const hiddenItems = Array.from(items).filter(
      (item) => item.style.display === "none"
    );

    hiddenItems.slice(0, 4).forEach((item) => {
      item.style.display = "block";
      item.style.opacity = 0;
      // efek fade-in sederhana
      setTimeout(() => {
        item.style.transition = "opacity 0.6s ease";
        item.style.opacity = 1;
      }, 10);
    });

    // Kalau udah gak ada item tersembunyi
    if (hiddenItems.length <= 4) {
      seeMoreBtn.style.display = "none";

      // Tampilkan tombol GitHub setelah sedikit delay
      setTimeout(() => {
        seeGithubBtn.style.display = "inline-block";
        seeGithubBtn.style.opacity = 0;
        setTimeout(() => {
          seeGithubBtn.style.transition = "opacity 0.6s ease";
          seeGithubBtn.style.opacity = 1;
        }, 10);
      }, 400);
    }
  });
});
