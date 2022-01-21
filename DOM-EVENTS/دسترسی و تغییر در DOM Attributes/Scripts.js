
const ctaElement=document.querySelector(".cta a");

if(ctaElement.hasAttribute("target"))
{

    console.log(ctaElement.getAttribute("target"));

}else{

    ctaElement.setAttribute("target","_blank");

}

console.log(ctaElement.attributes);
