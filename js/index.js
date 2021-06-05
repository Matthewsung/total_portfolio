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
    // sec_1원
    let win_W = window.innerWidth / 2;
    document.querySelector('#sec_1_cir1').setAttribute('width',win_W)
    document.querySelector('#sec_1_cir1').setAttribute('height',win_W)

    function sec_circle(id,color,pos_X,pos_Y,r){
        const sec_1_cir = document.querySelector(id);
        const ctx = sec_1_cir.getContext('2d');

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(pos_X, pos_Y, r, 0 , 2*Math.PI,true);
        ctx.fill();
    }
    
    // sec_2의 퍼센트 나타내는 막대
    let percent_index=0;
    let percent_start;
    function percent(id){
        const item_score =  document.querySelector(id);
        const ctx = item_score.getContext('2d');
        const real_score = Number(document.querySelector(id).nextElementSibling.innerText.split("%")[0] / 100);
        ctx.beginPath();
        ctx.fillStyle="#053f73"
        ctx.fillRect(0,0,percent_index,40);
        ctx.fill()
        percent_index +=1;
        percent_start = requestAnimationFrame(function(){percent(id)})
        if(percent_index >= item_score.clientWidth * real_score){
            cancelAnimationFrame(percent_start)
        }
    }

//////       실행      /////////

    // 모토에 글자 하나씩 써지는 함수 실행
    Write_info();
    // sec_1 원
    sec_circle('#sec_1_cir1', "#fff", win_W/2, win_W/2, win_W/2);
    sec_circle('#sec_1_cir2', "#bed8ef", 200, 200, 200);
    sec_circle('#sec_1_cir3', "#053f73", 100, 100, 100);
    sec_circle('#sec_1_cir4', "#bed8ef", 50, 50, 50);

    // sec_2 원
    sec_circle('#sec_2_cir1', "#bed8ef", 25, 25, 25);
    sec_circle('#sec_2_cir2', "#053f73", 75, 75, 75);
    sec_circle('#sec_2_cir3', "#bed8ef", 350, 350, 350);
    //sec_2 퍼센트
    


//////       만드는중      /////////

// 마우스 따라 움직이는 원


// $('.sec_2').on('mousemove',function(event){
//     let sec_2_W = $('.sec_2').width() / 2 ;
//     let sec_2_H = $('.sec_2').height() / 2;
//     let m_pos_X = (event.clientX - sec_2_W) * 0.07;
//     let m_pos_Y = (event.clientY - sec_2_H) * 0.07;

//     $('#sec_2_cir1').css({transform: "translate("+ -1*m_pos_X + "px," + -1*m_pos_Y + "px)"})
//     $('#sec_2_cir2').css({transform: "translate("+ m_pos_X + "px," + m_pos_Y + "px)"})
// })


let chk_percent =true;
$(window).scroll(function(){
    let sec_1_h = $('.sec_1').height() * 0.65;
    // console.log(sec_1_h)
    if($(window).scrollTop() >= sec_1_h){
        $('.info_pan').css({animation :"back_pan 1s forwards"});
        $('.info_outer_cir').css({animation: "circle_big 0.25s 0.75s forwards"});
        $('.info_inner_img').css({animation: "img_up 0.3s 1s forwards"})
        
        if(chk_percent){
            chk_percent=false;
            percent('#item_score_1');
            percent('#item_score_2');
            percent('#item_score_3');
            percent('#item_score_4');
            percent('#item_score_5');
            percent('#item_score_6');
            percent('#item_score_7');
        }
    }


})

















})