interface addNoteAction {
    type : string;
    payload : string;
}
interface delNoteAction {
    type: string;
    payload : number;
}
type Actiontype = addNoteAction | delNoteAction ;
const noteReducer = (state : any = [],action : Actiontype)=>
{
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state,action.payload]
        case 'DEL_NOTE':
            return state.filter((_:string , index:number) => index !== action.payload);
        default:
            return state;
    }
}
export default noteReducer;