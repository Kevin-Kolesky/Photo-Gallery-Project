// Get the modal
    var modal = document.getElementById("myModal");
    const overlay = document.querySelector(".overlay");

    //Get the image and set it in the modal with a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var imgIds = [
        'img1' ,
        'img2' ,
        'img3' ,
        'img4' ,
        'img5' ,
        'img6' ,
        'img7' ,
        'img8' ,
        'img9' ,
        'img10' ,
        'img11' 
    ];

    var current_img =0;

    const openModal = function(){
        modal.style.display = "flex";
        overlay.classList.remove("hidden");
    }

    function image(event) {
        openModal();    
        current_img = imgIds.indexOf(event.target.id);
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    }

    const btnNext = document.getElementById("btnNext");
    const btnPrevious = document.getElementById("btnPrevious");

    btnNext.onclick = function(){ 
        if (current_img != (imgIds.length - 1)) {
            current_img++;
            modalImg.src = document.getElementById(imgIds[current_img]).src;
            captionText.innerHTML = document.getElementById(imgIds[current_img]).alt;
           
        } else {
            current_img = 0;
            modalImg.src = document.getElementById(imgIds[current_img]).src;
        }
    }

    btnPrevious.onclick = function(){
        if (current_img != 0) {
            current_img--;
            modalImg.src =document.getElementById(imgIds[current_img]).src;
            captionText.innerHTML = document.getElementById(imgIds[current_img]).alt;
        } else {
            current_img = imgIds.length - 1;
            modalImg.src = document.getElementById(imgIds[current_img]).src;
            captionText.innerHTML = document.getElementById(imgIds[current_img]).alt;
        }
        

    }

    //Get the span element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    //When the user clicks on the span, close the modal
    span.onclick = function (){
        modal.style.display = "none";
        overlay.classList.add("hidden");
    }

    overlay.onclick = function (){
        modal.style.display = "none";
        overlay.classList.add("hidden");
    }

