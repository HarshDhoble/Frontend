const addnote = (name : string) =>{
    return {
        type : "ADD_NOTE",
        payload : name,
    }
}

const delnote =(id : number) => {
    return {
        type : "DEL_NOTE",
        payload : id,
    }
}
 export {addnote,delnote};
