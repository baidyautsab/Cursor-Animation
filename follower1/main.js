var main = document.querySelector(".main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dats) {
    gsap.to(cursor, {
        x: dats.x,
        y: dats.y,
        duration: 2.5,
        ease: "elastic.out(1,0.3)",
    })
})

imageDiv.addEventListener("mouseenter", function(){
    cursor.innerHTML = "Book a ride"
    gsap.to(cursor, {
        scale: 3,
        backgroundColor: "#9d9d9d6f"
    })
})

imageDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff"
    })
})