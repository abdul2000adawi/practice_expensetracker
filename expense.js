const form=document.querySelector("#data")
const formButton=document.querySelector("#formButton")
const input1=document.querySelector("#name")
const input2=document.querySelector("#date")
const input3=document.querySelector("#amount")
const table=document.querySelector("#tab")
const body=document.querySelector("#tbody")
const total=document.querySelector('#totalExpenses')

formButton.addEventListener('click', function(e){
    e.preventDefault();
    
    const name=input1.value;
    const date=input2.value;
    const amount=input3.value;

    if(name==="" || date==="" || amount===""){
        alert("Please Enter valid values");
    }

    else{


    const tr=document.createElement('tr')
    const td1=document.createElement('td')
    const td2=document.createElement('td')
    const td3=document.createElement('td')
    const td4=document.createElement('td')
    const in1=document.createElement('input')
    const in2=document.createElement('input')
    const in3=document.createElement('input')
    const button=document.createElement('button')
    const button2=document.createElement('button')

    in1.type='text'
    in1.className= "input is-small"
    in2.type='date'
    in2.className="input is-small"
    in3.type='text'
    in3.className="input is-small"
    td4.className="d-md-flex justify-content-md-center"
    button.innerText="delete"
    button.className="button is-small is-danger is-rounded me-md-2"
    button2.innerText="edit"
    button2.className="button is-small is-info is-rounded me-md-2"

    in1.setAttribute("readonly","readonly");
    in2.setAttribute("readonly","readonly");
    in3.setAttribute("readonly","readonly");

    in1.value=name;
    in2.value=date;
    in3.value=amount;

    td4.append(button)
    td4.append(button2)
    td1.append(in1)
    td2.append(in2)
    td3.append(in3)
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    body.append(tr)

    input1.value="";
    input2.value="";
    input3.value="";

    total.innerText=`${parseInt(total.innerText)+parseInt(in3.value)} $`

    button.addEventListener('click',function(e){
    total.innerText=`${parseInt(total.innerText)-parseInt(in3.value)} $`
    body.removeChild(tr);
    })
    let x=in3.value;
    button2.addEventListener('click',function(e){
        
        
        if(button2.innerText==="edit"){
            button2.innerText="save"
            in1.removeAttribute("readonly");
            in1.focus()
            in2.removeAttribute("readonly");
            in2.focus()
            in3.removeAttribute("readonly");
            in3.focus()
            
        }else{
            const y=in3.value;
            if(x<y){
                const z=parseInt(y)-parseInt(x);
                total.innerText=`${parseInt(total.innerText)+parseInt(z)} $`
            }else{
                const z=parseInt(x)-parseInt(y);
                total.innerText=`${parseInt(total.innerText)-parseInt(z)} $`
            }
            button2.innerText='edit';
            in1.setAttribute("readonly", "readonly");
            in2.setAttribute("readonly", "readonly");
            in3.setAttribute("readonly", "readonly");
            x=in3.value
        }

    })
    
   
    }
})



// function addNote(){
//     const tr=document.createElement('tr')
//     const td1=document.createElement('td')
//     const td2=document.createElement('td')
//     const td3=document.createElement('td')
//     const td4=document.createElement('td')
    
    




//     const noteObject={
//         id: Math.floor(Math.random() * 100000),
//         content1:
//     };

//     const notesElement= createNoteElement(noteObject.id,noteObject.content);
//     noteContainer.insertBefore(notesElement,addNoteButton);


//     existingNotes.push(noteObject);
//     saveNotes(existingNotes);
// }
