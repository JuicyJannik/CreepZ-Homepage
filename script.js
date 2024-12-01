document.addEventListener('DOMContentLoaded', function() {
    const myWorkButton = document.getElementById('myWorkButton');
    
    myWorkButton.addEventListener('click', function() {
        window.location.href = 'second.html';
    });
});


const dot = document.querySelector('.dot');
const dotTitle = document.getElementById('dotTitle');

const dotJs = document.querySelector('.dot-container-js .dot');
const dotTitleJs = document.getElementById('dotTitleJs');

const dotCss = document.querySelector('.dot-container-css .dot');
const dotTitleCss = document.getElementById('dotTitleCss');

const dotSql = document.querySelector('.dot-container-sql .dot');
const dotTitleSql = document.getElementById('dotTitleSql');

dot.addEventListener('mouseover', function() {
    dotTitle.style.opacity = 1;
});
dot.addEventListener('mouseout', function() {
    dotTitle.style.opacity = 0;
});

dotJs.addEventListener('mouseover', function() {
    dotTitleJs.style.opacity = 1;
});
dotJs.addEventListener('mouseout', function() {
    dotTitleJs.style.opacity = 0;
});

dotCss.addEventListener('mouseover', function() {
    dotTitleCss.style.opacity = 1;
});
dotCss.addEventListener('mouseout', function() {
    dotTitleCss.style.opacity = 0;
});


const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('selectedImage');

imageInput.addEventListener('change', function(event) {
    const file = event.target.files[0]; 

    if (file) {
        const reader = new FileReader(); 

        
        reader.onload = function(e) {
            imagePreview.src = e.target.result; 
            imagePreview.style.display = 'block'; 
            imagePreview.style.left = '50%'; 
            imagePreview.style.top = '50%';
        };

        reader.readAsDataURL(file); 
    }
});

let isDragging = false;

imagePreview.addEventListener('mousedown', function(e) {
    isDragging = true;
    const offsetX = e.clientX - imagePreview.offsetLeft;
    const offsetY = e.clientY - imagePreview.offsetTop;

    function moveAt(pageX, pageY) {
        imagePreview.style.left = pageX - offsetX + 'px';
        imagePreview.style.top = pageY - offsetY + 'px';
    }

    
    document.addEventListener('mousemove', onMouseMove);

    function onMouseMove(e) {
        if (isDragging) {
            moveAt(e.pageX, e.pageY);
        }
    }

    document.addEventListener('mouseup', function() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
    });
});

function copyText() {
    
    var copyText = document.getElementById("copyInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999); 

    document.execCommand("copy");

    
}
