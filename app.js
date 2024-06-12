// sự kiện mở
var btnOpen = document.querySelector(".open_model_btn");
// sự kiện đóng gồm 3 cái là ấn ra ngoài, ấn vào button close ở footer, ấn vào icon x ở header
var model = document.querySelector(".model");
var btnClose = document.querySelector(".model_foot button");
var iconClose = document.querySelector(".model_header i");
// sự kiện mở
// giải thuật khi có sự kiện click thì hàm hide xuất hiện
function toggleModel() {
  model.classList.toggle("hide");
  //   debug
  console.log(e.target);
}
// hàm toggle là mở thì tắt , tắt thì mở
btnOpen.addEventListener("click", toggleModel);

// hàm đóng
// vì inner nằm ở trong model nên phải có hàm để xác định
model.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModel;
  }
});
btnClose.addEventListener("click", toggleModel);

iconClose.addEventListener("click", toggleModel);
