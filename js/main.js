new Glide(".testimonial", {
  type: "carousel",
  perView: 2,
  focusAt: "center",
  gap: 50,

  breakpoints: {
    650: {
      perView: 1
    }
  }
}).mount();
