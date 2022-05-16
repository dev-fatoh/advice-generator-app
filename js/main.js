const btn=document.querySelector('.btn')
const advice=document.getElementById('d-advice')
const idHead=document.getElementById('d-id')
btn.addEventListener('click',getData)

async function getData(){
    const res=await fetch("https://api.adviceslip.com/advice")
    const data=await res.json()
    if(data){
    idHead.textContent=data.slip.id;
    advice.innerHTML=`<q> ${data.slip.advice} </q>`;
    }else{
        throw Error("failed to fetch")
    }
}
