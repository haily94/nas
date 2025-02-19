

//console.log('안녕??'); //콘솔창에 기록(=로그)을 남기겠다
//변수 variable

//자바스크립트 변수 정의 방법 3가지
//var
//let 그다음은 얘도 간혹 씀
//const ⭐️거의 얘만 씀⭐️
const nickName = '버미짱';
const realName = '신선범';
const age = 34;


//console.log(nickName,age,realName); //디버그, 디버깅 즉, 버그나 오류를 잡아낼 때 로그를 많이 사용함
//console.log('안녕 나는 버미짱이야 내 원래 이름은 심선범이고 나의 나이는 34살이야'); 


//⭐️변수를 끼워넣기(보간법, interpolation), 로그안에 ⭐️빽틱{물결}을 쓰고 딸러를 써서 불러옴
// console.log(`안녕 나는 ${nickName}이야 내 원래 이름은 ${realName}이고 나의 나이는 ${age}살이야`); 



/* 데이터 유형(type) 8가지 */ 
//1. 문자 (string)
const hell = '안녕'

//2. 숫자 (numver) 문자랑은 따옴표가 있냐 없냐의 차이
const num = 100//=1개는 할당연산자 : 값을 넣는 것

//3. 불린 (boolean) true, fales 두가지 값만 가지는게 불린 데이터
const happy = true



/* 조건문 */
// === 3개 비교연산자 : 비교대상
// const name = prompt('너 이름이 뭐니?')
// if(name ==='심선범'){
//     console.log('환영합니다. 고갱님😀');
// }



/*
hamburger를 클릭했을 때 offcanvas 메뉴가 왼쪽에서 오른쪽으로 나온다.
*/
//1. 햄버거를 클릭했을 때
//2. offcanvas의 css를 수정

const burger = document.querySelector('.hamburger') 
const canvas = document.querySelector('.offcanvas') 
let open = false

//toggle, 꺼졌다 켰다가 가능해야함
// burger.addEventListener('click',()=>{

//     if (open === false) {
//          canvas.style.transform = 'translateX(0)'
//     }
//    else{
//       canvas.style.transform = 'translateX(100%)'
//    }
  
// open = !open //!반전시키는 기능을 함, 적는 순서도 중요하기 때문에 보통 밑에다가 적음


/* ()=>{} : 화살표 함수 */
//3. offcanvas메뉴에 active 클래스를 넣거나 빼거나
burger.addEventListener('click',()=>{

    canvas.classList.toggle('active')

//     if (open === false) {
//          canvas.classList.add('active')
//     }
//    else{
//     canvas.classList.remove('active')
//    }
  
// open = !open 

})


//빨간 상자를 오른쪽으로 100px만큼 이동
//duration:속도, x: 방향축, rotate: 회전 -> 적는 순서는 상관없음
gsap.to('.box',{duration:3,x:100,rotate:360})


