document.addEventListener("DOMContentLoaded", () => {
    var loaderWrapper = document.getElementById("loader-wrapper")
    var content = document.getElementById("content")
  
    // Показываем контент сразу
    content.style.opacity = "1"
  
    // Имитация загрузки
    setTimeout(() => {
      // Плавно скрываем лоадер
      loaderWrapper.classList.add("fade-out")
  
      // Удаляем лоадер после завершения анимации
      setTimeout(() => {
        loaderWrapper.style.display = "none"
      }, 500)
    }, 1500)
  })