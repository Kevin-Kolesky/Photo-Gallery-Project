// Get the modal
    var modal = document.getElementById("myModal");
    const overlay = document.querySelector(".overlay");

    //Get the image and set it in the modal with a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");


    const openModal = function(){
        modal.style.display = "flex";
        overlay.classList.remove("hidden");
    }

    function image(event) {
        openModal();    
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    }

    //Get the span element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    //When the user clicks on the span, close the modal
    span.onclick = function (){
        modal.style.display = "none";
        overlay.classList.add("hidden");
    }

    overlay.onclick = function (){
        modal.style.display = "none";
        overlay.classList.add("hidden");
    }