import Allert from "./src/Allert.js";
import Storage from "./src/Storage.js";
import devsData from "./data.js";

function commingSoone() {
    alert("comming Soone")
}

// Get DaTa To Dom
const form_data_add  = document.querySelector('#form_data_add')
const devsTable  = document.querySelector('#devsTable')

/**
 * Submit Event
 */
form_data_add.addEventListener('submit' , function(e) {
    e.preventDefault()

    const form = new FormData(e.target);
    const allEntries = Object.fromEntries(form)
    const { name , email , gender , number , skill , loocation , sellary , image } = allEntries;

    if ( name == "" || email == "" || gender == undefined || number == "" || skill == "" || loocation == "" || sellary == "" ){
        document.querySelector('.alertMassage').classList.remove('d-none')
        document.querySelector('.alertMassage').innerHTML = Allert.danger('All Field Are Requared !')

        setTimeout(() => {
            document.querySelector('.alertMassage').classList.add('d-none')
        }, 5000);
    }else{
        Storage.set("devs" , allEntries )
        form_data_add.reset()
        devsShow()
    }
})  


/**
 * Devs Data Show In Table
 */
devsShow()
function devsShow() {
    if( Storage.get('devs') == false ){
        localStorage.setItem('devs' , JSON.stringify(devsData))
    }else{
        let data = Storage.get("devs");
        let showTable = "";
        data.reverse().map(( devs , index ) => {
            const { name , email , gender , number , skill , loocation , sellary , image } = devs;
            let img;
            if( image == "" || image == "#" && gender == "Male" ){
                img = "img/avatar2.png"
            }else if( image == "" || image == "#" && gender == "Female" ){
                img = "img/girl.jpg"
            }else{
                img = image
            }
            showTable +=  `
                <tr>
                    <td>${( index + 1 ) < 10 ? "0" + ( index + 1 ) : ( index + 1 ) }</td>
                    <td> 
                        <img src="${ img }" style="height: 60px; width: 60px; object-fit: cover;" alt="">
                    </td>
                    <td>${ name }</td>
                    <td>${ email }</td>
                    <td>${ gender }</td>
                    <td>${ number }</td>
                    <td>${ skill }</td>
                    <td>${ loocation }</td>
                    <td>${ sellary }৳</td>
                    <td>
                        <button class="btn btn-outline-info btn-sm" title="View" data-bs-toggle="modal" data-bs-target=".comming-modal"><i class="fas fa-eye"></i></button>
                        <button class="btn btn-outline-warning btn-sm" title="Edit" data-bs-toggle="modal" data-bs-target=".comming-modal"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-outline-danger btn-sm" title="Delete" data-bs-toggle="modal" data-bs-target=".comming-modal"><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
            `
        })
        devsTable.innerHTML = showTable;
    }
}