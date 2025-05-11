//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


function ignoreChar(str) {
		return str.replace(/^(A |An |The)/i,"").trim();
}
bands.sort((a,b)=>ignoreChar(a)>ignoreChar(b)?1:-1);


const mylist=document.querySelector("#band")

mylist.innerHTML=bands.map(band => `<li> ${band}<li>`).join("");
mylist.style.list-style;

