document.addEventListener('DOMContentLoaded', function () {
    const openImage = document.querySelectorAll('.js-open-image');
    const modal = document.querySelector('.js-modal');
    const modalClose = document.querySelector('.js-modal-close');
    const modalContainer = document.querySelector('.js-modal-container');
    const modalImage = document.querySelector('.modal-image');

    // Function to show the modal with the clicked image
    function showImage(imageSrc) {
        modalImage.src = imageSrc; // Set the src attribute of the modal image
        modal.classList.add('open'); // Add the 'open' class to display the modal
    }

    // Function to hide the modal
    function hideImage() {
        modal.classList.remove('open'); // Remove the 'open' class to hide the modal
    }

    // Event listeners for each image
    openImage.forEach(function (image) {
        image.addEventListener('click', function () {
            const imagePath = this.src; // Get the path of the clicked image
            showImage(imagePath); // Show the modal with the clicked image
        });
    });

    // Event listener for closing the modal
    modalClose.addEventListener('click', hideImage);
});



var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
mobileMenu.onclick = function(){
    var isClosed = header.clientHeight === headerHeight; 
    if(isClosed){
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

//auto open menu 
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
 for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    var isParentMenu = this.menuItem.nextElementSibling && this.menuItem.nextElementSibling.classList.contains('subnav');
    menuItem.onclick = function(event){
        if(isParentMenu) {
            event.preventDefault();
        } else{
            header.style.height = null;
        }
    }
 }

