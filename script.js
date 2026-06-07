let list=[];

function addHistory(msg){
 const li=document.createElement('li');
 li.textContent=msg;
 document.getElementById('history').prepend(li);
}
function status(msg,color='lightgreen'){
 const s=document.getElementById('status');
 s.style.color=color;
 s.textContent=msg;
}
function render(){
 const c=document.getElementById('listContainer');
 c.innerHTML='';
 list.forEach((v,i)=>{
   let n=document.createElement('div');
   n.className='node';
   n.textContent=v;
   c.appendChild(n);
   if(i<list.length-1){
      let a=document.createElement('div');
      a.className='arrow';
      a.textContent='→';
      c.appendChild(a);
   }
 });
 if(list.length){
   let a=document.createElement('div');
   a.className='arrow';
   a.textContent='→ NULL';
   c.appendChild(a);
 }
}
function getVal(){return document.getElementById('valueInput').value.trim();}

function insertStart(){
 let v=getVal(); if(!v)return;
 list.unshift(v); render();
 status('Inserted '+v+' at start');
 addHistory('Inserted '+v+' at start');
  clearInput();
}
function insertEnd(){
 let v=getVal(); if(!v)return;
 list.push(v); render();
 status('Inserted '+v+' at end');
 addHistory('Inserted '+v+' at end');
}
function deleteNode(){
 let v=getVal();
 let i=list.indexOf(v);
 if(i===-1){status('Node '+v+' not found','tomato'); return;}
 list.splice(i,1); render();
 status('Deleted '+v);
 addHistory('Deleted '+v);
}
function searchNode(){
 let v=getVal();
 let nodes=document.querySelectorAll('.node');
 let found=false;
 nodes.forEach(n=>{
   n.classList.remove('highlight');
   if(n.textContent===v){n.classList.add('highlight'); found=true;}
 });
 if(found){status('✓ Element '+v+' found'); addHistory('Found '+v);}
 else{status('✗ Element '+v+' not found in Linked List','tomato');}
}
function reverseList(){
 list.reverse(); render();
 status('Linked List Reversed');
 addHistory('Reversed list');
}
function findMiddle(){
 if(!list.length){status('List is empty','tomato'); return;}
 let mid=Math.floor(list.length/2);
 status('Middle Node: '+list[mid]);
 addHistory('Middle node '+list[mid]);
}
function countNodes(){
 status('Total Nodes: '+list.length);
}
function clearList(){
 list=[]; render();
 status('List Cleared');
 addHistory('Cleared list');
}
function clearInput(){
    document.getElementById("valueInput").value = "";
}
render();