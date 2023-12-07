const details = [{
    name:"Cristiano Ronaldo",
    followers: 612,
    jpeg:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSE73QSePjnmGIOSbSoO579pCqyiv9dv4FkWAOTLmVjfsEJBfqsp-3bZsKL9CJ7UiFLH__tmimLuy_MliA"
},
{
    name:"Leonel Messi",
    followers: 492,
    jpeg:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSfexCxE9tM0JwMlV3EDp2uhEjKCCtoNJWGPKqsTguA0vJdefb07rcH1Kcx_2F3x3wUcrRqi_IlYqH2PV4"
},
{
    name:"Neymar JR",
    followers: 16,
    jpeg:"https://dailytrust.com/wp-content/uploads/2022/12/Neymar.jpg"
},
{
    name:"kylie Jenner",
    followers: 390,
    jpeg:"https://i2-prod.dailystar.co.uk/incoming/article22242079.ece/ALTERNATES/s615b/3_Kylie-Jenner-poses-in-just-a-bra-beside-mystery-companion.jpg"
},
{
    name:"Kim Kardashian",
    followers: 364,
    jpeg:"https://images.businessoffashion.com/profiles/asset/1682627055721573/kim-k-copy-1745419093909742.jpg?auto=format%2Ccompress&fit=crop&h=360&w=660"
},
{
   name:"David Bechkam",
   followers:85,
   jpeg:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3a48501789cdf113/60db790b47339c0fc01c188c/3e947186d512164cf8dbe0987a865dd2b714eea6.png?auto=webp&format=pjpg&width=3840&quality=60"
},
{
    name:"Virat Kholi",
    followers: 263,
    jpeg:"https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1561096160/1561096159.jpg"
},
{
    name:"Ishowspeed",
    followers:13,
    jpeg:"https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/09/20/IShowspeed-header-img.jpg"
},
{
    name:"Sidemen",
    followers:5,
    jpeg:"https://sidemenmerch.net/wp-content/uploads/2023/03/Sidemen-Merch-7.jpg"
},
{
    name:"MrBeast",
    followers:45,
    jpeg:"https://www.rollingstone.com/wp-content/uploads/2022/10/mrbeast-raising-money.jpg?w=1581&h=1054&crop=1"
}
];



const leftname = document.querySelector(".leftname");
const rightname = document.querySelector(".rightname");
const rightimage = document.querySelector(".rightimage");
const rightslide = document.querySelector(".rightslide");
const leftslide = document.querySelector(".leftslide");
const follow = document.querySelector(".follow");
const follows = document.querySelector(".follows")
let randomnum = Math.floor(Math.random() * details.length);
let rando = Math.floor(Math.random() * details.length);
function step1() {
    
  
    if (randomnum == rando) {
      rando = Math.floor(Math.random() * details.length);
    }
    else{
        leftname.innerHTML = details[randomnum].name;
        leftslide.style.backgroundImage = `url(${details[randomnum].jpeg})`;
        rightname.innerHTML = details[rando].name;
        rightslide.style.backgroundImage = `url(${details[rando].jpeg})`;
        follow.innerHTML = details[randomnum].followers + " Million";
        follows.innerHTML = details[rando].followers + " Million";
        follows.style.visibility = "hidden";

    }
  
    
  }
  
  step1();
  
function comparehigher() {
    
    const followerCount = parseInt(follow.innerHTML);
    const followsCount = parseInt(follows.innerHTML);

    if (followerCount > followsCount) {
        alert("Game over");
        step1();
    } else if (followerCount < followsCount) {
        leftslide.style.backgroundImage = rightslide.style.backgroundImage;
        leftname.innerHTML = rightname.innerHTML
        follow.innerHTML = follows.innerHTML;
        if(randomnum == swap || rando == swap ){
            const swap = Math.floor(Math.random() * details.length);
            rightname.innerHTML = details[swap].name;
            rightslide.style.backgroundImage = `url(${details[swap].jpeg})`;
            follows.innerHTML = details[swap].followers + " Million";
        }
        
    }
    // else if(followerCount == followsCount){
    //     const swap = Math.floor(Math.random() * details.length);
    //     leftname.innerHTML = details[swap].name;
    //     leftslide.style.backgroundImage = `url(${details[swap].jpeg})`;
    //     follows.innerHTML = details[swap].followers + " Million";

    // } 

}
function comparelower() { 
    const followerCount = parseInt(follow.innerHTML);
    const followsCount = parseInt(follows.innerHTML);

    if (followerCount < followsCount) {
        alert("Game over");
        step1();
    }
    else if (followerCount > followsCount) {
        leftslide.style.backgroundImage = rightslide.style.backgroundImage;
        leftname.innerHTML = rightname.innerHTML
        follow.innerHTML = follows.innerHTML;
        const swap = Math.floor(Math.random() * details.length);
        rightname.innerHTML = details[swap].name;
        rightslide.style.backgroundImage = `url(${details[swap].jpeg})`;
        follows.innerHTML = details[swap].followers + " Million";
    }
    
    // else if(followerCount == followsCount){
    //     const swap = Math.floor(Math.random() * details.length);
    //     leftname.innerHTML = details[swap].name;
    //     leftslide.style.backgroundImage = `url(${details[swap].jpeg})`;
    //     follows.innerHTML = details[swap].followers + " Million";
    // } 
}
