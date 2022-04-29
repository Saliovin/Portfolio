const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('down')) {
        entry.target.classList.add('slideDown')
      }
      else {
        entry.target.classList.add('slideUp')
      }
    }
  })
})

window.onload = () => document.querySelectorAll(".anim").forEach(document => observer.observe(document))