const infos = [
  {
    id: "Dat",
    name: "Đỗ Thành Đạt",
    image: "assets/profile/Dat.jpg",
    face: "https://www.facebook.com/thanhdat1205/",
    git: "https://github.com/ddatdt12",
    linked: "https://www.linkedin.com/in/ddatdt12/",
  },
  {
    id: "Duong",
    name: "Kiều Bá Dương",
    image: "assets/profile/Duong.jpg",
    face: "https://www.facebook.com/ga.hulla.5",
    git: "https://github.com/kieubaduong",
    linked: "https://www.linkedin.com/in/kieu-ba-duong-9b955b219/",
  },
  {
    id: "Nhien",
    name: "Nguyễn Hữu An Nhiên",
    image: "assets/profile/Nhien.jpg",
    face: "https://www.facebook.com/annhienkt",
    git: "https://github.com/annhienktuit",
    linked: "https://www.linkedin.com/in/annhien-uit/",
  },
  {
    id: "Phat",
    name: "Nguyễn Công Tấn Phát",
    image: "assets/profile/Phat.jpg",
    face: "https://www.facebook.com/tanphat.nguyen.9674",
    git: "https://github.com/nguyencongtanphat",
  },
  {
    id: "Dang",
    name: "Đỗ Khánh Đăng",
    image: "assets/profile/Dang.jpg",
    face: "https://www.facebook.com/khanhdang.cd/",
    git: "https://github.com/hidang",
    linked: "https://www.linkedin.com/in/dangdodev/",
  },
  {
    id: "Ha",
    name: "Nguyễn Thúy Hà",
    image: "assets/profile/Ha.jpg",
    face: "https://www.facebook.com/zzz.moin/",
    linked: "https://www.linkedin.com/in/h%C3%A0-th%C3%BAy",
  },
  {
    id: "Vi",
    name: "Huỳnh Thế Vĩ",
    image: "assets/profile/Vi.jpg",
    face: "https://www.facebook.com/hyu.02",
    git: "https://github.com/hyu-uit",
    linked: "https://www.linkedin.com/in/ivthehuynh/",
  },
  {
    id: "Dung",
    name: "Bùi Trí Dũng",
    image: "assets/profile/Dung.jpg",
    face: "https://www.facebook.com/btrdung",
    git: "https://github.com/BTrDung",
    linked: "https://www.linkedin.com/in/btrdung/",
  },
  {
    id: "Ngan",
    git: "https://github.com/huyngan",
    name: "Huỳnh Thanh Ngân",
    image: "assets/profile/Ngan.jpg",
    face: "https://www.facebook.com/cinnamilk.n",
    linked: "https://www.linkedin.com/in/htngan/",
  },
  {
    id: "Tan",
    name: "Phạm Ngọc Tân",
    image: "assets/profile/Tan.jpg",
    face: "https://www.facebook.com/ngctnnnnn",
    git: "https://github.com/ngctnnnn",
    linked: "https://www.linkedin.com/in/ngctnnnn/",
  },
];


const params = new URLSearchParams(window.location.search);

///select dom element
const avatarDom = document.querySelector(".avatar");
const nameDom = document.querySelector(".name");
const titleDom = document.querySelector("title");
const btnsDom = document.querySelectorAll(".btn"); 

//get name params from url
const memberNameUrl = params.get("name");
console.log(memberNameUrl);
//find info member in infos list
const memberInfo = infos.find((item) => item.id === memberNameUrl);


// assign value to dom
avatarDom.setAttribute("src", memberInfo.image);
nameDom.innerHTML = memberInfo.name;
titleDom.innerText = memberInfo.name;

console.log(Array.from(btnsDom));
for(var btnDom of btnsDom){
    const className = btnDom.className.replace(" btn","")
    if (memberInfo[className]) {
        const linkSocialDom = document.querySelector(`.${className} a`)
        linkSocialDom.setAttribute("href", memberInfo[className]);
    }else{
        btnDom.style.display = "none";
    }
}