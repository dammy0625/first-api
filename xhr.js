const sele = document.querySelector("select")
const div = document.querySelector("#contain")
const inp = document.querySelector("input")
const fest = document.querySelector(".fest")
const sec = document.querySelector(".sec")
const ft = document.querySelector(".ft")
const st = document.querySelector(".st")

fest.onclick =function(){
  ft.classList.toggle("fti")
}
sec.onclick =function(){
  st.classList.toggle("sti")
}


sele.onchange = ()=>{const xhr = new XMLHttpRequest
  xhr.open("GET",'http://www.boredapi.com/api/activity?type='+ sele.value )
  xhr.send() 
  xhr.onload = ()=> {
    var frd = JSON.parse(xhr.response)
    div.innerText = frd.activity
  
  }

  xhr.onerror = ()=>{alert("unable to load avtivity...am sorry....check that you have an internet connection though")}
  
  }
inp.onkeyup= ()=>{const vhr = new XMLHttpRequest
  vhr.open("GET",'http://www.boredapi.com/api/activity?participants='+ inp.value )
  vhr.send() 
  vhr.onload = ()=> {
    var vrd = JSON.parse(vhr.response)
    div.innerText = vrd.activity
  
  }
  vhr.onerror = ()=>{alert("unable to load avtivity...am sorry....check that you have an internet connection though")}
  
  }
