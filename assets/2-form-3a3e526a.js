const t="feedback-form-state",r=document.querySelector(".feedback-form"),l=document.querySelector("input"),o=document.querySelector("textarea");function s(e){if(e.preventDefault(),l.value.trim()===""||o.value.trim()==="")return alert("All form fields must be filled in");localStorage.removeItem(t);const n=l.value.trim(),c=o.value.trim(),a=JSON.stringify({email:n,text:c});console.log(a),localStorage.setItem(t,a),e.currentTarget.reset()}r.addEventListener("submit",s);const m=localStorage.getItem(t)??"";try{const e=JSON.parse(m);console.log(e),o.value=e.text,r.elements.email.value=e.email}catch{console.log("No save data!")}
//# sourceMappingURL=2-form-3a3e526a.js.map