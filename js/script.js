console.log("Porzućcie nadzieję wszyscy, którzy tu wchodzicie")

let button1 = document.querySelector(".button1");
let imageId = document.getElementById("Bieszczady1");

console.log(button1)


button1.addEventListener("click", () => {

    if(button1.innerText === "Pokaż zdjęcia"){
        button1.innerText = "Pokaż kolejne";
    }
  
});


var photoIndex = 0;
var photoUrls = ["https://s3.viva.pl/styl-zycia/dom/bieszczady-513254-GALLERY_BIG.jpg", "https://iili.io/JvzchX.jpg", "https://iili.io/JvzlQn.jpg", "https://gfx.radiozet.pl/var/radiozet/storage/images/podroze/bieszczady-szlaki-turystyczne.-6-najpiekniejszych-gorskich-szlakow/1457489-1-pol-PL/Bieszczady-6-najpiekniejszych-szlakow-turystycznych_article.jpg" ]

function changeImage()
{
imageId = document.getElementById("Bieszczady1")
photoIndex = photoIndex === (photoUrls.length -1) ? 0: photoIndex +1;
imageId.src = photoUrls[photoIndex];

}


button1.addEventListener("click", () => {
    document.getElementById("Bieszczady1").style.display="block";
});
