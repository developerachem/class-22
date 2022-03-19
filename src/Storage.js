class Storage {
    static has(key){
        return localStorage.getItem(key) ? localStorage.getItem(key) : false;
    }
    static get(key){
        return JSON.parse(this.has(key))
    }
    static set( key , data ){
        let allData = [];
        if( this.has(key) ){
            allData = JSON.parse(this.has(key))
        }
        allData.push(data)

        localStorage.setItem( key , JSON.stringify(allData))
    }
}

export default Storage;