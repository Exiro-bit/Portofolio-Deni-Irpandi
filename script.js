document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi EmailJS
  emailjs.init("bxrW6kS67mmlitjPy"); // Ganti dengan Public Key Anda

  // Formulir kontak
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Mencegah reload halaman

      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      emailjs
        .send("service_4s009oq", "template_m132nie", {
          from_name: name,
          reply_to: email,
          message: message,
        })
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Pesan Terkirim! MOHON JANGAN SPAM!!!",
            text: "Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.",
          });
          contactForm.reset(); // Reset form setelah pengiriman
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Gagal Mengirim Pesan",
            text: "Silakan coba lagi nanti.",
          });
          console.error("Error:", error);
        });
    });
  }

  // Efek animasi muncul saat scroll ke form kontak
  const formSection = document.querySelector(".contact-form");

  function handleScroll() {
    if (formSection) {
      const formPosition = formSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (formPosition < screenHeight * 0.75) {
        formSection.classList.add("show");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Jalankan saat pertama kali dimuat
});
