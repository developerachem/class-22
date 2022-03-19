class Allert {
    static danger(massage){
        return ` <p class="alert alert-danger d-flex justify-content-between" >${ massage } <button class="btn-close" data-bs-dismiss="alert"></button></p>`
    }
    static success(massage){
        return ` <p class="alert alert-success d-flex justify-content-between" >${ massage } <button class="btn-close" data-bs-dismiss="alert"></button></p>`
    }
    static warning(massage){
        return ` <p class="alert alert-warning d-flex justify-content-between" >${ massage } <button class="btn-close" data-bs-dismiss="alert"></button></p>`
    }
}

export default Allert;