var ul = document.querySelector('#list');
var text = document.querySelector('#text')
var number;
var li;
var deletes = document.getElementById('delete');

function Show(){

  var render = document.getElementById('render');
  var show = document.getElementById('show');
  // show 按鈕， render 清單區塊

  if (render.style.display === 'none') {
    render.style.display = 'block';
    show.innerText = "隱藏";
   
  }
  else {
    render.style.display = 'none';
    show.innerText = "顯示資料";


  }
  Count();

}
function Count(){

  number = document.querySelectorAll("ul li");
  document.getElementById('Count').innerHTML = number.length;
    
  for (let i = 0; i < number.length; i++){
    number[i].style.backgroundColor = "#15141A";
  
  }

}
Count();

function DefaultList() {
  deletes.innerText = "移除末項資料";
  deletes.disabled  =  false;
  var defaults = document.getElementById('default');
  // default 保留字

  ul.setAttribute('class', 'wrap');
  var t;
  var original = ["網頁設計", "物聯網設計" , "CSS版型設計" , "數位學習系統" ]; 

  var flag = false;

  if (flag == false) {
    
  defaults.disabled=true;
  defaults.innerText = "資料已載入";
  document.getElementById('render').appendChild(ul);
  original.forEach(renderOriginalList);

  function renderOriginalList(element, index, original) {

    let i = document.createElement('i');
    let a = document.createElement('a');
    let li = document.createElement('li');
 
    i.setAttribute('class', 'fa-solid fa-circle-xmark');
    a.setAttribute('data-num', original.length);
    li.setAttribute('class', 'item');

    a.appendChild(i);
    li.appendChild(a);
    ul.appendChild(li);

    li.innerHTML = li.innerHTML + element;
  }
  
  }
  flag = true;
 
        setTimeout(function () {
            defaults.disabled=false;
            defaults.innerText = "再次載入資料";
            flag = false;
        }, 5000);
    
  Count();
}
 


// 中文排序會依照編碼大小
// 黑暗執行緒：https://blog.darkthread.net/blog/javascript-chinese-char-sorting/


 function Newlist() {

  let h3 = document.querySelector('#h3');
  deletes.innerText = "移除末項資料";
  deletes.disabled  =  false;
  

  if(input.value == ""){
    alert();
  }
 
  else{


    let i = document.createElement('i');
    let a = document.createElement('a');
    let li = document.createElement('li');
    

    i.setAttribute('class', 'fa-solid fa-circle-xmark');
    a.setAttribute('data-num', '0');
    li.setAttribute('class', 'item');

    li.textContent = input.value;
    a.appendChild(i);
    li.appendChild(a);
    ul.appendChild(li);

    showAlert('成功新增', 'primary', '1');
    input.value = "";


    Count();
  
  }


  }

  function DelList() {
   
    let number = document.querySelectorAll("ul li");
    let list = document.querySelector('#list');
    let ul = document.querySelector('#list li:nth-last-child(1)');
    console.log(number);
    if (number.length != 0) {
      deletes.disabled  =  false;
      deletes.innerText = "移除末項資料";
      list.removeChild(ul) ;
  
    }else{
      deletes.disabled  =  true;
      deletes.innerText = "刪除前請先新增";
    }

    Count();
  }

  function Clear() {
    

    let list = document.querySelector('#list');
    let number = document.querySelectorAll("ul li");
    let h3 = document.querySelector('#h3');
     
    h3.classList.add("list", "alert");
    h3.innerText = "您上次刪除了"+ number.length +"本";
    
     
    showAlert('成功移除', 'danger' , number.length);
    list.innerHTML = '';
    number = [];

    // Count();    
  }


  function showAlert(message, className, number) {

    const li   = document.querySelectorAll('.item');
    const div = document.createElement('div');
    
    div.className = `alert alert-${className} text-center`;
    div.appendChild(document.createTextNode(message));
    div.innerText +=  number +"本";
    const text = document.querySelector('#text');

    text.insertBefore(div, h3);
    // text.appendChild(h3);

    

    // Vanish in 3 seconds
    var intervalid = setTimeout( 'Seconds()', 3000);
    const alert = document.getElementsByClassName('alert');
    console.log(alert);
    // clearInterval(intervalid);

  }
  function Seconds(){
    
    const alert = document.getElementsByClassName('alert');
    const creh3 = document.createElement('h3');
    const text = document.querySelector('#text');
    const h3 = document.querySelector('#h3');

    alert[0].remove();
    
    // for ( var i=0; i < alert.length; i++){
    //   console.log(alert[i].innerHTML);

    //   alert[i].remove();
      
    //   return;

    // }
    // creh3.setAttribute('id', 'h3');
    // creh3.className = `lists`;
    // text.insertBefore(creh3, h3);

  }

  // setTimeout( 'console.log("1 秒後執行 console")', 2000);


 function alert() {
  Swal.fire({
    icon: 'error',
    title: '新增作業失敗',
    text: '請輸入正確的格式，已避免系統被玩壞哦！',
    html:
    '請 再 <b>確 認</b> 一 次 你 有 輸 入 內 容 (╯°Д°）╯' ,
    confirmButtonText:
    '好哦我了解 <i class="fa fa-thumbs-up"></i>',
    confirmButtonAriaLabel: 'understand',
    footer: '<a href="https://github.com/wastu01/Javascript-Todolist" target=”_blank”>為何會出現此訊息？請自行研究</a>'
    }
  );
}
function confirm() {
  let number = document.querySelectorAll("ul li");
  Swal.fire({
      title: "操作確認",
      text: "刪除後資料無法回覆，你要確定ㄟ",
      showCancelButton: true,
      confirmButtonText: '確定',
      cancelButtonText: '取消'
  }).then(function(result) {
     if (result.value) {
          Swal.fire("已刪除"+number.length+"本");
          Clear();
          Count();
     }
     else {
         Swal.fire("OK 資料沒有刪除");
     }
  });
}

function Sort(message){
  var sorts = document.getElementById('sort');
  sorts.disabled=true;
  sorts.innerText = message;
}
function Search(message) {
  var search = document.getElementById('search');
  search.disabled=true;
  search.innerText = message;
  
}

  
  
  


