const optionEle = document.querySelector(".custom-select")
const labelInput = document.querySelector(".labelInput")
const btnEle = document.querySelector(".btnEle")
const outputEle = document.querySelector(".output")
const inpitEleNum = document.querySelector(".inpitEleNum")

btnEle.addEventListener("click",(e)=>{
   
    let isError = validation(labelInput)
    if(!isError){
        let typeValue=  optionEle.value;
        let labelvalue=  labelInput.value;
        let label = null;
       
        const div = document.createElement("div");
        let input = null;
      
        if(typeValue === 'textarea'){
            input = document.createElement("textarea");
        }else{
            input = document.createElement("input");
        }
       

        if(typeValue === 'submit'){
            input.value = labelvalue;
        }else{
            label = document.createElement("label");
            label.innerHTML = labelvalue;
            
        }
        if(typeValue !== 'submit' ){
            div.appendChild(label);
        }else{
            input.className ="btn-primary";
        }


        input.className = "form-control mb-4"
        input.type = typeValue
        input.style.display ="block"
        
        div.appendChild(input);
        outputEle.appendChild(div);
        labelInput.value = " "; 
        if(typeValue === 'submit'){
            input.className ="btn btn-primary";
        }
    }
    
 
});

function validation(labelInput){
   let isError = false ;
    if(labelInput.value == ""){
        isError =true;
    }
    return isError;
}

