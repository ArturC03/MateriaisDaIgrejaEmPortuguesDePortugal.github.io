// Get the height of the screen
        var screenHeight = window.innerHeight;
        var screenWidth=window.innerWidth;
        var tempDiv = document.getElementById("tempDiv");
        var bgHeight = tempDiv.clientHeight; // Altura da imagem de fundo
        var bgWidth = tempDiv.clientWidth; // Altura da imagem de fundo
        
        var x = screenHeight/2 - bgWidth/2;

// Set the background position based on screen height
        document.body.style.backgroundPositionY = screenHeight/2 + bgHeight + "px";
        document.body.style.backgroundPositionX =  screenWidth/2 - 130 + "px";
        

document.getElementById("vem-e-segue-me").addEventListener("click", function() {
    window.location.href = "https://www.churchofjesuschrist.org/study/come-follow-me?lang=ept";
});

document.getElementById("liahona").addEventListener("click", function() {
    window.location.href = "https://www.churchofjesuschrist.org/study/magazines/liahona?lang=ept";
});

document.getElementById("para-o-vigor-da-juventude").addEventListener("click", function() {
    window.location.href = "https://www.churchofjesuschrist.org/study/magazines/for-the-strength-of-youth?lang=ept";
});

document.getElementById("amigo").addEventListener("click", function() {
    window.location.href = " https://www.churchofjesuschrist.org/study/magazines/friend?lang=ept";
});


document.getElementById("jovens-adultos").addEventListener("click", function() {
    window.location.href = "https://www.churchofjesuschrist.org/study/magazines/ya-weekly?lang=ept";
});

document.getElementById("guia-para-os-jovens").addEventListener("click", function() {
    window.location.href =" https://www.churchofjesuschrist.org/study/manual/personal-development-youth-guidebook?lang=ept";
});


