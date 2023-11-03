const userPic = localStorage.getItem("image");
const userProfile = document.querySelector('#userPicTop');

if(userPic) {
    userProfile.src = userPic;
}