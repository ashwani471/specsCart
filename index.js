window.addEventListener('DOMContentLoaded', showEffects);

function showEffects(){
    setTimeout(()=>{
       let div= document.getElementById('frame-4');
       let span1 = document.getElementById('four-frame');
       span1.classList.remove('hidden');

       div.classList.remove('hidden');
       
       div.classList.add('frame-4');
       span1.classList.add('visible');
    },600);

    setTimeout(()=>{
        let div2 = document.getElementById('lens-3');
        span2 = document.getElementById('three-lens');
        span2.classList.remove('hidden');
        div2.classList.remove('hidden');
        div2.classList.add('lens-3');
        span2.classList.add('visible');
    },2000);

    setTimeout(()=>{
        let div3 = document.getElementById('laser');
        span3 = document.getElementById('one-laser');
        span3.classList.remove('hidden');
        div3.classList.remove('hidden');
        div3.classList.add('laser');
        span3.classList.add('visible');
    },3000)
}

let free_coating = document.getElementById('free-coating');
console.log(free_coating);

let free_coating_expand = document.getElementById('free-coating-expand');
console.log(free_coating_expand);

free_coating.addEventListener('click',expandFreeCoating);

function expandFreeCoating(){
    free_coating_expand.classList.remove('display-none');
    // free_coating_expand.classList.add('display-block');
    // console.log(free_coating_expand);
    free_coating.classList.add('display-none');
}

free_coating_expand.addEventListener('click',removeFreeCoatingExpand);

function removeFreeCoatingExpand(){
    free_coating.classList.remove('display-none');
    free_coating_expand.classList.add('display-none');
    // free_coating.classList.add('display-block');
}