let gallery = [1, 2, 3, 4, 5, 6, 7];

let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let image = document.querySelector("#imageBl");

let stringUrl = image.src.slice(0, -5);
let count = 1;
let imgsMaxCount = 7;
const refresh = () => {
  return (image.src = stringUrl + count + ".jpg");
};
next.addEventListener("click", () => {
  count++;
  if (count > imgsMaxCount) {
    count = 1;
  }
  refresh();
});
prev.addEventListener("click", () => {
  if (count < 0) {
    count = imgsMaxCount;
  }
  count--;
  refresh();
});
