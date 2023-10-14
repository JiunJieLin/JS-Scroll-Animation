"use strict";

const boxes = document.querySelectorAll(".box");
//當整個視窗window滑動時
window.addEventListener("scroll", checkBoxes);
//初始化目前視窗內的元素位置
checkBoxes();
function checkBoxes() {
  //預定觸發時會顯示元素的視窗高度,從畫面的4/5處開始
  const triggerBottom = (window.innerHeight / 5) * 4;
  //判斷元素是否在可視範圍內
  boxes.forEach((box) => {
    //Box-top=>元素頂部到視窗頂部的距離
    const boxTop = box.getBoundingClientRect().top;
    //當元素到視窗頂部的距離<預定觸發高度 試製為show
    if (triggerBottom > boxTop) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
