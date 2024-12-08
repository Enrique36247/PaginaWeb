document.addEventListener('DOMContentLoaded', function() {
    let bg = document.getElementById("background");
    let mountain = document.getElementById("mountain");
    let text = document.getElementById("text");

    window.addEventListener('scroll', function() {
        let value = window.scrollY;
        if (bg) bg.style.transform = `translateY(${value * 0.3}px)`;
        if (mountain) mountain.style.transform = `translateY(${value * 0.5}px)`;
        if (text) text.style.transform = `translateY(${value * 0.8}px)`;
    });
});