

var description= document.querySelector('#discr')
var additional =document.querySelector('#additional')
var review = document.querySelector('#review')


  function displayDes(){
      description.classList.add("d-block");
      description.classList.remove("d-none");
      additional.classList.add("d-none");
      description.classList.remove("d-block");
      review.classList.add("d-none");
      description.classList.remove("d-block");

  }
 function displayAdd(){
    description.classList.add("d-none");
    description.classList.remove("d-block");
      additional.classList.add("d-block");
      additional.classList.remove("d-none");
      review.classList.add("d-none");
      review.classList.remove("d-block");
 }
 function displayRev(){
    description.classList.add("d-none");
    description.classList.remove("d-block");

      additional.classList.add("d-none");
      additional.classList.remove("d-block");

      review.classList.add("d-block");
      review.classList.remove("d-none");


 }

 function itemPage(img){
     var itemImage=img.src;
   sessionStorage.setItem("url",itemImage);
     child= open("item-page.html")
 }  

 function itemImgFn(){
   var itemImg=sessionStorage.getItem("url");
  document.getElementById("itemImg").src=itemImg;
 }
 
