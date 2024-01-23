// Get the modal
    var modal = document.getElementById("myModal");

    //Get the image and set it in the modal with a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    function image(event) {
        modal.style.display = "block";
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    }

    //Get the span element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    //When the user clicks on the span, close the modal
    span.onclick = function (){
        modal.style.display = "none";
    }

/*
METHOD 1
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

openModalBtn.addEventListener("click",openModal);

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

closeModalBtn.addEventListener("click",closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e){
    if (e.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal();
    }
});

METHOD 2 
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js'; // Check https://jquery.com/ for the current version

// Get the modal
var modal = $("#myModal");
var modalImg = modal.find('.modal-content');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $(".myImg");
var captionBox = $("#caption");

img.click(function() {
    modalImg.attr('src', $(this).attr('src'));
    captionBox.text($(this).attr('alt'));
    modal.show();
  });

  // Get the elements that closes the modal
var modalCloser = $(".close");

// When the user clicks on the close element, close the modal
modalCloser.click(function() {
  modal.hide();
});

*/