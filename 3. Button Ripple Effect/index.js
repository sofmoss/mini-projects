const btnE1 = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
    const x = event.pageX - btnE1.offsetLeft;
    const y = event.pageY - btnE1.offsetTop;

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
});