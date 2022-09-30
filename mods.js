function display_image(src, width, height, alt) {
  var a = document.createElement("img");
  a.src = src;
  a.width = width;
  a.height = height;
  a.alt = alt;
  document.body.appendChild(a);
}

display_image('EXAMPLE.com', 276, 110, 'imagejs');
//Replace the 2 numbers after the URL with the aspect ration of your image, for example: 1080, 720//
//Replace the EXAMPLE.com with the URL of your image//
