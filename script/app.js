// database:
import data from "./database.js";

let count = 0;
let arr = [];

const dataBerat = localStorage.getItem("weight");
const dataTinggi = localStorage.getItem("height");
const dataUmur = localStorage.getItem("age");
const dataGender = localStorage.getItem("gender");
const dataNama = localStorage.getItem("name")

const username = document.getElementById(`username`)
username.innerText = `Hi, ${dataNama.split(" ")[0]}`

let dataKalori = 0
if(dataGender === "Male") {
  dataKalori = 66.5 + (13.7 * dataBerat) + (5 * dataTinggi) - (6.8 * dataUmur)
} else {
  dataKalori = 65.5 + (9.6 * dataBerat) + (1.8 * dataTinggi) - (4.7 * dataUmur)
}
const dummy = dataKalori.toFixed(2)

console.log(dummy)

const tambah = document.getElementById("tambah");
const cover = document.getElementById("cover");
const tamMakan = document.getElementById("tamMakan");
const bawah = document.getElementById("bawah");
const sisaKal = document.getElementById("sisaKal");
const ToKal = document.getElementById("ToKal");
const reset = document.getElementById("reset");

tambah.addEventListener("click", tambahMenu);
function tambahMenu() {
  const coverBtn = document.createElement("div");
  coverBtn.className = "coverBtn";
  tamMakan.style.overflowY = "auto";

  const show = document.createElement("div");
  show.className = "show";
  const coverIconMakan = document.createElement("div");
  coverIconMakan.setAttribute("class", "coverIconMakan");
  const kalimat = document.createElement("h1");
  kalimat.setAttribute("class", "kalimat");
  kalimat.innerText = `Makanan:`;
  const circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  coverIconMakan.appendChild(circle);
  coverIconMakan.appendChild(kalimat);
  show.appendChild(coverIconMakan);

  //   list
  const listing = document.createElement("div");
  listing.setAttribute("class", "listing");
  const imgList = document.createElement("img");
  imgList.setAttribute("class", "imgList");
  const coverList = document.createElement("div");
  coverList.setAttribute("class", "coverList");
  const namaMakanan = document.createElement("h1");
  namaMakanan.setAttribute("class", "listtNama");
  const makananVal = document.createElement("h1");
  makananVal.setAttribute("class", "listtPorsi");

  // btn menu
  const buttonmenu = document.createElement("button");
  buttonmenu.innerText = "Pilih makanan";
  buttonmenu.setAttribute("menuId", count);
  buttonmenu.setAttribute("class", "btnPop");

  buttonmenu.addEventListener("click", (e) => {
    const idMenu = e.target.getAttribute("menuId");
    localStorage.setItem("selected-menu-id", idMenu);

    const showMenu = document.createElement("div");
    showMenu.setAttribute("id", "menu");
    for (let key of data) {
      let nama = key.nama;
      let cal = key.kalori;
      let prosi = key.porsi;
      let foto = key.img;

      const btn = document.createElement("button");
      btn.setAttribute("id", "btnList");
      btn.setAttribute("value", cal);
      const img = document.createElement("img");
      img.setAttribute("src", foto);
      img.setAttribute("class", "foto");
      const prev = document.createElement("h1");
      prev.setAttribute("class", "namaFoto");
      prev.innerText = nama;
      const des = document.createElement("p");
      des.setAttribute("class", "desFoto");
      des.innerText = prosi;

      imgList.setAttribute("src", foto);
      imgList.style.display = "block";
      coverList.style.display = "block";

      btn.appendChild(img);
      btn.appendChild(prev);
      btn.appendChild(des);

      btn.addEventListener("click", () => {
        circle.style.backgroundImage = `url(${foto})`;
        let value = prosi;
        let namae = nama;
        kalimat.innerText = namae;
        namaMakanan.innerText = namae;
        makananVal.innerText = value;

        const id = localStorage.getItem("selected-menu-id");

        arr[id] = namae;

        totalKal();
        showMenu.remove(); // close pop up
      });
      showMenu.appendChild(btn);
    }
    cover.appendChild(showMenu);
  });
  // list - append
  coverList.appendChild(namaMakanan);
  coverList.appendChild(makananVal);
  listing.appendChild(imgList);
  listing.appendChild(coverList);
  bawah.style.overflowY = "auto";
  bawah.appendChild(listing);
  // btn close
  const buttonX = document.createElement("button");
  buttonX.innerText = "X";
  buttonX.setAttribute("class", "close");
  buttonX.setAttribute("deleteId", count);

  buttonX.addEventListener("click", (e) => {
    const deleteId = e.target.getAttribute("deleteId");
    arr[deleteId] = null;
    totalKal();
    listing.remove();
    show.remove(); // buat nge-remove
  });
  coverBtn.appendChild(buttonmenu);
  coverBtn.appendChild(buttonX);
  show.appendChild(coverBtn);
  tamMakan.appendChild(show);
  count += 1;
}

function totalKal() {
  let totalkalori = 0;
  console.log(arr);

  for (const perArr of arr) {
    if (!perArr) continue;

    for (const perData of data) {
      const name = perData.nama;
      const kalori = perData.kalori;
      if (perArr === name) {
        console.log(totalkalori, kalori);
        totalkalori += kalori;
      }
    }
  }
  ToKal.innerText = totalkalori;
  sisaKal.innerText = dummy - totalkalori;

  //   dibawah 0

  let total = Math.abs(dummy - totalkalori); // -500 = 500
  if (total >= 500) {
    sisaKal.style.color = "red";
  } else if (total > 0) {
    sisaKal.style.color = "yellow";
  } else {
    sisaKal.style.color = "green";
  }

  if (total === dummy) {
    sisaKal.style.color = "green";
  }
}

reset.addEventListener("click", () => {
  arr = [];
  count = 0;
  bawah.innerHTML = "";
  tamMakan.innerHTML = "";
  totalKal();
});