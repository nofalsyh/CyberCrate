// Navbar start
// Search form start
// toggle class active Search form
const Searchform = document.querySelector(".Search-form");
const Searchbox = document.querySelector("#Search-box");

// Ketika Search form di klik
document.querySelector("#Search-button").onclick = (e) => {
  Searchform.classList.toggle("active");
  Searchbox.focus();
  e.preventDefault();
};
// Search form end

// Shopping cart start
// toggle class active Shopping cart
const Shoppingcart = document.querySelector(".Shopping-cart");

// Ketika Shopping cart di klik
document.querySelector("#Shopping-cart-button").onclick = (e) => {
  Shoppingcart.classList.toggle("active");
  e.preventDefault();
};
// Shopping cart end

// Hamburger menu start
// toggle class active Hamburger menu
const navbarNav = document.querySelector(".Navbar-nav");

// Ketika Hamburger menu di klik
document.querySelector("#Hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};
// Hamburger menu end

// Klik di luar sidebar untuk menghilangkan nav
const Sb = document.querySelector("#Search-button");
const Scb = document.querySelector("#Shopping-cart-button");
const Hmb = document.querySelector("#Hamburger-menu");

document.addEventListener("click", function (e) {
  if (!Sb.contains(e.target) && !Searchform.contains(e.target)) {
    Searchform.classList.remove("active");
  }
  if (!Scb.contains(e.target) && !Shoppingcart.contains(e.target)) {
    Shoppingcart.classList.remove("active");
  }
  if (!Hmb.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Navbar end

// Shop_by_categories.html start
// Shop by motherboard start
// Motherboard product 1 start
const Motherboardproduct1Detail = document.querySelector("#Motherboard-product-1-detail");
const Motherboardproduct1DetailButton = document.querySelectorAll(".Motherboard-product-1-detail-button");

Motherboardproduct1DetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    Motherboardproduct1Detail.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close
document.querySelector(".Motherboard-product-1-detail .Close-icon").onclick = (e) => {
  Motherboardproduct1Detail .style.display = "none";
  e.preventDefault();
};
// Motherboard product 1 end

// Motherboard product 2 start
const Motherboardproduct2Detail = document.querySelector("#Motherboard-product-2-detail");
const Motherboardproduct2DetailButton = document.querySelectorAll(".Motherboard-product-2-detail-button");

Motherboardproduct2DetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    Motherboardproduct2Detail .style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close 
document.querySelector(".Motherboard-product-2-detail .Close-icon").onclick = (e) => {
  Motherboardproduct2Detail .style.display = "none";
  e.preventDefault();
};
// Motherboard product 2 end
// Shop by motherboard end

// Shop by prosesor start
// prosesor product 1 start
const Prosesorproduct1detail = document.querySelector("#Prosesor-product-1-detail");
const Prosesorproduct1detailButton = document.querySelectorAll(".Prosesor-product-1-detail-button");

Prosesorproduct1detailButton.forEach((btn) => {
  btn.onclick = (e) => {
    Prosesorproduct1detail.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close 
document.querySelector(".Prosesor-product-1-detail .Close-icon").onclick = (e) => {
  Prosesorproduct1detail .style.display = "none";
  e.preventDefault();
};
// prosesor product 1 end

// prosesor product 2 start
const Prosesorproduct2detail = document.querySelector("#Prosesor-product-2-detail");
const Prosesorproduct2detailButton = document.querySelectorAll(".Prosesor-product-2-detail-button");

Prosesorproduct2detailButton.forEach((btn) => {
  btn.onclick = (e) => {
    Prosesorproduct2detail.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close 
document.querySelector(".Prosesor-product-2-detail .Close-icon").onclick = (e) => {
  Prosesorproduct2detail .style.display = "none";
  e.preventDefault();
};
// prosesor product 2 end
// Shop by prosesor end

// Shop by RAM start
// RAM product 1 start
const RAMproduct1detail = document.querySelector("#RAM-product-1-detail");
const RAMproduct1detailButton = document.querySelectorAll(".RAM-product-1-detail-button");

RAMproduct1detailButton.forEach((btn) => {
  btn.onclick = (e) => {
    RAMproduct1detail.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close
document.querySelector(".RAM-product-1-detail .Close-icon").onclick = (e) => {
  RAMproduct1detail .style.display = "none";
  e.preventDefault();
};
// RAM product 1 end

// RAM product 2 start
const RAMproduct2detail = document.querySelector("#RAM-product-2-detail");
const RAMproduct2detailButton = document.querySelectorAll(".RAM-product-2-detail-button");

RAMproduct2detailButton.forEach((btn) => {
  btn.onclick = (e) => {
    RAMproduct2detail.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".RAM-product-2-detail .Close-icon").onclick = (e) => {
  RAMproduct2detail .style.display = "none";
  e.preventDefault();
};
// RAM product 2 end
// Shop by RAM end

// Shop by storage start
// storage product 1 start
const Storageproduct1detail = document.querySelector("#Storage-product-1-detail");
const Storageproduct1detailButton = document.querySelectorAll(".Storsge-product-1-detail-button");

Storageproduct1detailButton.forEach((btn) => {
  btn.onclick = (e) => {
    Storageproduct1detail.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close
document.querySelector(".Storage-product-1-detail .Close-icon").onclick = (e) => {
  Storageproduct1detail .style.display = "none";
  e.preventDefault();
};
// RAM product 1 end

// RAM product 2 start
const Storageproduct2detail = document.querySelector("#Storage-product-2-detail");
const Storageproduct2detailButton = document.querySelectorAll(".Storage-product-2-detail-button");

Storageproduct2detailButton.forEach((btn) => {
  btn.onclick = (e) => {
    Storageproduct2detail.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".Storage-product-2-detail .Close-icon").onclick = (e) => {
  Storageproduct2detail .style.display = "none";
  e.preventDefault();
};
// RAM product 2 end
// Shop by RAM end

// Shop by GPU start
// GPU product 1 start
const GPUproduct1Detail = document.querySelector("#GPU-product-1-detail");
const GPUproduct1DetailButton = document.querySelectorAll(".GPU-product-1-detail-button");

GPUproduct1DetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    GPUproduct1Detail.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close
document.querySelector(".GPU-product-1-detail .Close-icon").onclick = (e) => {
  GPUproduct1Detail .style.display = "none";
  e.preventDefault();
};
// Motherboard product 1 end

// Motherboard product 2 start
const MotherboardProduct2Detail = document.querySelector("#Motherboard-product-2-detail");
const MotherboardProduct2DetailButton = document.querySelectorAll(".Motherboard-product-2-detail-button");

MotherboardProduct2DetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    MotherboardProduct2Detail .style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close 
document.querySelector(".Motherboard-product-2-detail .Close-icon").onclick = (e) => {
  MotherboardProduct2Detail .style.display = "none";
  e.preventDefault();
};
// Motherboard product 2 end
// Shop by motherboard end







// Shop_by_categories.html end
