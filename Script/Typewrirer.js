// const delay = (n) => new Promise( r => setTimeout(r, n));
var i = 0;
function Run()
{
    var txt = '勝騏實業早期主要將產品銷售至全台灣各大沙發、家具工廠，我們以提供穩定與高品質的產品為目標，穩紮穩打奠定公司形象。隨著時代變遷，市場對於多元產品的需求劇增，我們已蛻變成台灣知名的面料供應商，並持續以勝騏的品牌行走於各大沙發製造商、家具店門市、裝修裝潢界、設計師，更甚至於一般消費者。我們期許以自有的品牌帶領潮流，選擇勝騏出品即是有品質、時尚富麗的代表，讓您的生活空間有溫馨舒適的氛圍。'; /* The text */
    var speed = 20; /* The speed/duration of the effect in milliseconds */
    var target = document.querySelector('.AnimationText-2')
    if(txt.length == i)
    {
      target.innerHTML=''
      i = 0
    }
    function typeWriter() {
      if (i < txt.length) {
        target.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
    // alert('Hello');
    
}
Run();