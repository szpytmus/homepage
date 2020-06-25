console.log("Porzućcie nadzieję wszyscy, którzy tu wchodzicie")

let button = document.querySelector(".button");
let imageId = document.getElementById("Bieszczady1");

console.log(button)


button.addEventListener("click", () => {

    if(button.innerText === "Pokaż zdjęcia"){
        button.innerText = "Pokaż kolejne";
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


button.addEventListener("click", () => {
    document.getElementById("Bieszczady1").style.display="block";
});
