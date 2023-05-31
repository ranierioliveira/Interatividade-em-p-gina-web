let item;

function dragStart(){
    item = event.target;
    console.log(item)
}
function permiteDrop(){
    event.preventDefault;
}
function dDrop(){
    event.preventDefault;
    if(event.target.className == 'box'){
        event.target.appendChild(item);
    }
}