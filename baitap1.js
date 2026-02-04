function upDate(previewPic) {

    console.log("Mouse over triggered");

    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Đổi text
    document.getElementById("image").innerHTML = previewPic.alt;

    // Đổi background image
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}


function unDo() {

    console.log("Mouse out triggered");

    // Reset background
    document.getElementById("image").style.backgroundImage = "url('')";

    // Reset text
    document.getElementById("image").innerHTML =
        "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
