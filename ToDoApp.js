let toDoList=[
    {
        item: '',
        dueDate: ''
    }
];

function addToDo(){
    let inputValue=document.querySelector('#workBox').value;
    let inputDate=document.querySelector('#toDoDate').value;
    toDoList.push({item: inputValue, dueDate: inputDate});
    document.querySelector('#workBox').value= '';
    document.querySelector('#toDoDate').value= '';
    displayItem()
}

function displayItem(){
    let containerElement=document.querySelector('.container');
    let newHtml='';
    for (let i=0; i<toDoList.length; i++){
        let item=toDoList[i].item;
        let dueDate=toDoList[i].dueDate;
        if (item !== '' && dueDate !== '') {
        newHtml+=`
        
            <span>${item}</span>  
            <span>${dueDate}</span> 
            <button class="del" onclick="toDoList.splice(${i},1);
            displayItem();">Delete</button>
        
        `;
    }
}
    containerElement.innerHTML=newHtml;
    }
