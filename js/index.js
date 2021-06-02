$(document).ready(function(){
    // 모토에 글자 하나씩 써지는 함수
    let Info_motto = $('.info_motto span').text().split("");
    let Info_index=0;
    let tmp_motto=[]; 
    let info_interval;
    function Write_info(){
        info_interval = setInterval(function(){
            // tmp_motto.push(Info_motto[Info_index])
            tmp_motto += Info_motto[Info_index];
            $('.info_motto span').text(tmp_motto);
            Info_index += 1;
            if(Info_index >= Info_motto.length){
                clearInterval(info_interval)
                setTimeout(() => {
                    Write_info()
                },5000);
                Info_index = 0 ;
                tmp_motto=""; 
                
            }
        },100)
    }

    
//////       실행      /////////

    // 모토에 글자 하나씩 써지는 함수 실행
    Write_info()
    // 민들레 내려가는 애니메이션
    $('.sm_seed').animate({left:"80%",top:"100%"},3000);


//////       만드는중      /////////

// const hello = document.querySelector('.sec_1_hello');
// const ctx = hello.getContext('2d');
// ctx.font = "48px serif";
// ctx.strokeText("안녕하세요",30, 50)











































const item_1 = document.querySelector('#item_1');
const context = item_1.getContext('2d');
const cx = item_1.clientWidth / 2;
const cy = item_1.clientHeight / 2;
let tmp_raf;
let start = 1.5 * Math.PI;
let end = start;
let score = Number(document.querySelector('.item_score_box').innerText.split("%")[0]) * 0.01;


function percent(){
    end +=  Math.PI / 50 ;
    context.beginPath();
    context.arc(cx, cx, cx*0.8, start, end ,false);
    context.lineWidth ="20"
    context.lineCap="round"
    context.strokeStyle = "red"
    context.stroke();
    tmp_raf=requestAnimationFrame(percent)
    if(end >= start +  2*Math.PI * score  ){ // 0.5가 퍼센트
        cancelAnimationFrame(tmp_raf)
    }
}

// requestAnimationFrame(percent)
    percent()














})