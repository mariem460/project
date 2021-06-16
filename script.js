

const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.textContent = `about us\\contact`;
});

document.getElementById("homePage").onmouseover = function() {mouseOver()};
document.getElementById("homePage").onmouseout = function() {mouseOut()};
function mouseOver() {
    document.getElementById("homePage").style.color = "white";
  }
  
function mouseOut() {
    document.getElementById("berlin").style.color = "black";
  }

document.getElementById("berlin").onmouseover = function() {mouseOverBerlin()};
document.getElementById("berlin").onmouseout = function() {mouseOutBerlin()};
  
function mouseOverBerlin() {
    document.getElementById("berlin").style.color = "red";
  }
  
function mouseOutBerlin() {
    document.getElementById("berlin").style.color = "black";
  }

  document.getElementById("copenhagen").onmouseover = function() {mouseOverCopenhagen()};
document.getElementById("copenhagen").onmouseout = function() {mouseOutCopenhagen()};
  
function mouseOverCopenhagen() {
    document.getElementById("copenhagen").style.color = "red";
  }
  
function mouseOutCopenhagen() {
    document.getElementById("copenhagen").style.color = "black";
  }

  document.getElementById("munich").onmouseover = function() {mouseOverMunich()};
  document.getElementById("munich").onmouseout = function() {mouseOutMunich()};
    
  function mouseOverMunich() {
      document.getElementById("munich").style.color = "red";
    }
    
  function mouseOutMunich() {
      document.getElementById("munich").style.color = "black";
    }

  document.getElementById("more").onmouseover = function() {mouseOverMore()};
  document.getElementById("more").onmouseout = function() {mouseOutMore()};
    
  function mouseOverMore() {
      document.getElementById("more").style.color = "red";
    }
    
  function mouseOutMore() {
      document.getElementById("more").style.color = "black";
    }

    document.getElementById("donate").onmouseover = function() {mouseOverDonate()};
    document.getElementById("donate").onmouseout = function() {mouseOutDonate()};
      
    function mouseOverDonate() {
        document.getElementById("donate").style.color = "red";
      }
      
    function mouseOutDonate() {
        document.getElementById("donate").style.color = "black";
      }



      function toggleImage() {
        var img1 = "https://static.wixstatic.com/media/206b5b_82dc3b793eb64209b5e03bd8daeb95b7~mv2_d_5760_3073_s_4_2.jpg/v1/fill/w_3360,h_944,al_t,q_90,usm_0.66_1.00_0.01/206b5b_82dc3b793eb64209b5e03bd8daeb95b7~mv2_d_5760_3073_s_4_2.webp";
        var img2 = "https://static.wixstatic.com/media/206b5b_504e72f45ea1403a8de3423c99dc8dfb~mv2.jpg/v1/fill/w_1920,h_539,al_t,q_85/206b5b_504e72f45ea1403a8de3423c99dc8dfb~mv2.webp";
        var img3 = "https://static.wixstatic.com/media/206b5b_5e45e0b290884c2cb127c4af29540a24~mv2.png/v1/fill/w_1121,h_315,al_c,q_85/206b5b_5e45e0b290884c2cb127c4af29540a24~mv2.webp";
        var imgElement = document.getElementById('toggleImage');
     
        imgElement.src = (imgElement.src === img1)? img2 : img1 ; img3  ;
     }


  
  
  





