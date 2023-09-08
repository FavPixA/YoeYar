// home banners
document.getElementById("explore-more-button").addEventListener("click", function() {
    window.location.href = "category.html";
  });
document.getElementById("learn-more-button").addEventListener("click", function() {
    window.location.href = "category.html";
  });
document.getElementById("collection-button").addEventListener("click", function() {
    window.location.href = "category.html";
  });

// nav bar responsive
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}
