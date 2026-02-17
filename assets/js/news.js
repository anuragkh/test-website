(function(){
  const btn = document.querySelector("[data-news-toggle]");
  const all = document.querySelector("[data-news-all]");
  if(!btn || !all) return;

  btn.addEventListener("click", () => {
    const isOpen = all.classList.toggle("show");
    btn.textContent = isOpen ? "Hide full news" : "Show full news";
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
})();
