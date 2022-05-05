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

// eslint-disable-next-line no-unused-vars
const toggleTheme = () => {
  const bodyClassList = document.querySelector("body").classList
  const toggleClassList = document.querySelector(".fa-solid").classList
  if (bodyClassList.contains("dark-theme")) {
    bodyClassList.remove("dark-theme")
    toggleClassList.value = "fa-solid fa-moon"
    document.querySelectorAll(".theme").forEach(document => {
      const newSrc = document.getAttribute("src").split("/")
      newSrc.splice(2,1)
      document.setAttribute("src", newSrc.join("/"))
    })
  }
  else {
    bodyClassList.add("dark-theme")
    toggleClassList.value = "fa-solid fa-sun"
    document.querySelectorAll(".theme").forEach(document => {
      const newSrc = document.getAttribute("src").split("/")
      newSrc.splice(2,0,"dark-mode")
      document.setAttribute("src", newSrc.join("/"))
    })
  }
}

window.onload = () => document.querySelectorAll(".anim").forEach(document => observer.observe(document))