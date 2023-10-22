let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//FUNCTION SCRIPT WA//
function sendwhatsapp() {
  var phonenumber = "+6285745080888";
  var name = document.querySelector(".name").value;
  var alamat = document.querySelector(".alamat").value;
  var mapel = document.querySelector(".mapel").value;
  var tambah = document.querySelector(".tambah").value;
  var jumlah = document.querySelector(".jumlah").value;
  var kelas = document.querySelector(".kelas").value;
  var wa = document.querySelector(".wa").value;
  var pesan = document.querySelector(".pesan").value;

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "*Nama :* " +
    name +
    "%0a" +
    "*Alamat :* " +
    alamat +
    "%0a" +
    "*Mapel Pilihan Utama :* " +
    mapel +
    "%0a" +
    "*Mapel Tambahan :* " +
    tambah +
    "%0a" +
    "*Jumlah Mapel :* " +
    jumlah +
    "%0a" +
    "*Kelas :* " +
    kelas +
    "%0a" +
    "*No.WhatsApp :* " +
    wa +
    "%0a" +
    "*Pesan Anda :* " +
    pesan +
    "%0a%0a";
  //+"This is an example of send HTML form data to Whatsapp";

  window.open(url, "_blank").focus();
}

//MODAL BOX 1
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};
//CLOSE MODAL BOX//
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

//MODAL BOX 2
const itemDetailModala = document.querySelector("#item-detail-modala");
const itemDetailButtona = document.querySelector(".item-detail-buttona");

itemDetailButtona.onclick = (e) => {
  itemDetailModala.style.display = "flex";
  e.preventDefault();
};
//CLOSE MODAL BOX//
document.querySelector(".modala .close-icon").onclick = (e) => {
  itemDetailModala.style.display = "none";
  e.preventDefault();
};

//MODAL BOX 3
const itemDetailModalb = document.querySelector("#item-detail-modalb");
const itemDetailButtonb = document.querySelector(".item-detail-buttonb");

itemDetailButtonb.onclick = (e) => {
  itemDetailModalb.style.display = "flex";
  e.preventDefault();
};
//CLOSE MODAL BOX//
document.querySelector(".modalb .close-icon").onclick = (e) => {
  itemDetailModalb.style.display = "none";
  e.preventDefault();
};

//MODAL BOX 4
const itemDetailModalc = document.querySelector("#item-detail-modalc");
const itemDetailButtonc = document.querySelector(".item-detail-buttonc");

itemDetailButtonc.onclick = (e) => {
  itemDetailModalc.style.display = "flex";
  e.preventDefault();
};
//CLOSE MODAL BOX//
document.querySelector(".modalc .close-icon").onclick = (e) => {
  itemDetailModalc.style.display = "none";
  e.preventDefault();
};

//MODAL BOX 5
const itemDetailModald = document.querySelector("#item-detail-modald");
const itemDetailButtond = document.querySelector(".item-detail-buttond");

itemDetailButtond.onclick = (e) => {
  itemDetailModald.style.display = "flex";
  e.preventDefault();
};
//CLOSE MODAL BOX//
document.querySelector(".modald .close-icon").onclick = (e) => {
  itemDetailModald.style.display = "none";
  e.preventDefault();
};

//MODAL BOX 6
const itemDetailModale = document.querySelector("#item-detail-modale");
const itemDetailButtone = document.querySelector(".item-detail-buttone");

itemDetailButtone.onclick = (e) => {
  itemDetailModale.style.display = "flex";
  e.preventDefault();
};
//CLOSE MODAL BOX//
document.querySelector(".modale .close-icon").onclick = (e) => {
  itemDetailModale.style.display = "none";
  e.preventDefault();
};
