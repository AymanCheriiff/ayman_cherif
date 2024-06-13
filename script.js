const closeButton = document.querySelector('#closeButton');
const leftNabBar = document.querySelector('#side-bar');
const sideBarButton = document.querySelector('#side-bar-button');
closeButton.addEventListener('click', function closeSideBar() {
    leftNabBar.style.left = '-300px';
    leftNabBar.style.width = '300px';
});

sideBarButton.addEventListener('click', function openSideBar() {
    leftNabBar.style.left = '0px';
    leftNabBar.style.width = '100%';
    setTimeout(()=>{
        closeButton.style.transform = 'rotate(-90deg)';
    },250)
    closeButton.style.transform = 'rotate(90deg)';
})
