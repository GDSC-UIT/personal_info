const infos = [
  {
    id: "Dat",
    name:"Đỗ Thành Đạt",
    image: "assets/profile/Dat.jpg",
    face: "https://www.facebook.com/thanhdat1205/",
    git: "https://github.com/ddatdt12",
  },
  {
    id: "Duong",
    face: "https://www.facebook.com/ga.hulla.5",
    git: "https://github.com/kieubaduong",
    linkIn: "https://www.linkedin.com/in/kieu-ba-duong-9b955b219/",
  },
];


const params = new URLSearchParams(window.location.search);

///select dom element
const avatarDom = document.querySelector(".avatar");
const nameDom = document.querySelector(".name");
const btnsDom = document.querySelectorAll(".btn"); 

//get name params from url
const memberNameUrl = params.get("name");
console.log(memberNameUrl);
//find info member in infos list
const memberInfo = infos.find((item) => item.id === memberNameUrl);


// assign value to dom
avatarDom.setAttribute("src", memberInfo.image);
nameDom.innerHTML = memberInfo.name;

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