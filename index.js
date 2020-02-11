function getWindowSizeInfo() {
  let size = `网页可见区域宽度clientWidth: ${$0.clientWidth}, 网页可见区域高度clientHeight: ${$0.clientHeight}, 网页可见区域宽度offsetWidth: ${$0.offsetWidth} (包括边线和滚动条宽度), 网页可见区域高度offsetHeight: ${$0.offsetHeight} (包括边线的宽度), 网页正文全文宽度scrollWidth: ${$0.scrollWidth}, 网页正文全文高度scrollHeight: ${$0.scrollHeight}, 网页内容被卷去的高度scrollTop: ${$0.scrollTop} (Firefox浏览器), 网页内容被卷去的高度scrollTop: ${document.documentElement.scrollTop} (IE浏览器), 网页内容被卷去的宽度scrollLeft: ${$0.scrollLeft}, 网页内容正文部分上screenTop: ${window.screenTop}, 网页内容正文部分左screenLeft: ${window.screenLeft}, 屏幕分辨率的高度height: ${window.screen.height}, 屏幕分辨率的宽度width: ${window.screen.width}, 屏幕可用区域高度availHeight: ${window.screen.availHeight}, 屏幕可用区域宽度availWidth: ${window.screen.availWidth}`;
  return size;
}

function getEleWidthInfo() {
  let size = `
  clientWidth（content+padding）: ${$0.clientWidth}
  offsetWidth（content+padding+border+垂直滚动条宽度）[不包括伪元素的宽高]: ${$0.offsetWidth}
  scrollWidth（content+padding+[伪元素::before、::after]）: ${$0.scrollWidth}
  scrollLeft: ${$0.scrollLeft}
  screenLeft: ${window.screenLeft}
  屏幕分辨率的宽度width: ${window.screen.width}
  屏幕可用区域宽度availWidth: ${window.screen.availWidth}`;
  return size;
}
