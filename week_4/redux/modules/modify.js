import { async } from "@firebase/util";
import{db} from "../../firebase"
import{collection, doc, getDoc, getDocs, addDoc} from "firebase/firestore"


const LOAD_MODIFY = "modify/LOAD_MODIFY"

export const loadModify = (boardList) => {
    return {type:LOAD_MODIFY,boardList:boardList}
}

const initialState = {
    board_list: []

}

export const loadListFB = () => {
    return async function(dispatch){
        const board_data = await getDocs(collection(db,"word"))
        let board_list = []
        board_data.forEach((b, idx)=>{
            board_list.push(...b.data())

        })

        dispatch(loadModify(board_list))
        
    }
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "modify/LOAD_MODIFY": {
            return {...state}
        }
        default:
            return state;
    }
    
}