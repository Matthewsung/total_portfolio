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



// sec_1원
let win_W = window.innerWidth / 2;
document.querySelector('#sec_1_cir1').setAttribute('width',win_W)
document.querySelector('#sec_1_cir1').setAttribute('height',win_W)




function sec_1_circle(id,color,pos_X,pos_Y,r){
    const sec_1_cir = document.querySelector(id);
    const ctx = sec_1_cir.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(pos_X, pos_Y, r, 0 , 2*Math.PI,true);
    ctx.fill();
}
sec_1_circle('#sec_1_cir1', "#fff", win_W/2, win_W/2, win_W/2);
sec_1_circle('#sec_1_cir2', "#bed8ef", 200, 200, 200);
sec_1_circle('#sec_1_cir3', "#053f73", 100, 100, 100);
sec_1_circle('#sec_1_cir4', "#bed8ef", 50, 50, 50);











let percent_index=0;
let percent_start;
function percent(id){
    const item_score = document.querySelector(id);
    const ctx = item_score.getContext('2d');
    const real_score = Number(document.querySelector(id).nextElementSibling.innerText.split("%")[0] / 100);
    ctx.beginPath();
    ctx.fillRect(0,0,percent_index,40);
    ctx.fill()
    percent_index +=8;
    percent_start = requestAnimationFrame(percent)
    if(percent_index >= item_score.clientWidth * real_score){
        cancelAnimationFrame(percent_start)
    }
}
percent('#item_score_1')
percent_start = requestAnimationFrame(percent)
cancelAnimationFrame(percent_start)


























})