const user = localStorage.getItem("loggedUser");
if (!user) window.location.href = "login.html";

const gallery = document.getElementById("myGallery");
const images = JSON.parse(localStorage.getItem("images_" + user)) || [];

images.forEach(addImage);

function uploadImage() {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    images.push(reader.result);
    localStorage.setItem("images_" + user, JSON.stringify(images));
    addImage(reader.result);
  };

  reader.readAsDataURL(file);
}

function addImage(src) {
  const img = document.createElement("img");
  img.src = src;
  gallery.appendChild(img);
}
