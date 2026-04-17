
function storageKey(id){return 'divlji-cas:'+id}
function saveAnswer(id){
  const el=document.querySelector('[data-answer="'+id+'"]');
  if(!el) return; localStorage.setItem(storageKey(id), el.value);
  const flag=document.querySelector('[data-flag="'+id+'"]'); if(flag){flag.textContent='Guardado'; setTimeout(()=>flag.textContent='',1200)}
}
function loadAnswers(){document.querySelectorAll('[data-answer]').forEach(el=>{const v=localStorage.getItem(storageKey(el.dataset.answer)); if(v!==null) el.value=v;});}
function toggleSolution(id){const el=document.getElementById(id); if(el) el.style.display=el.style.display==='block'?'none':'block';}
window.addEventListener('DOMContentLoaded', loadAnswers);
