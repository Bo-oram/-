import { async } from "@firebase/util";
import{db} from "../../firebase"
import{collection, doc, getDoc, getDocs, addDoc} from "firebase/firestore"



const LOAD_LIST = "board/LOAD_LIST";
const ADD_LIST = "board/ADD_LIST";

export const loadList = (board_list) => {
    return {type:LOAD_LIST, board_list};
}


export const addList = (user_word) => {
    return {type:ADD_LIST, user_word};
}

const initialState = {
    boardList: []
} 

export const loadListFB = () => {
    return async function(dispatch){
        //파이어스토어에 저장된 리스트정보 가저오기
        const board_data = await getDocs(collection(db,"word"))     
        let board_list = [];
        board_data.forEach((b, idx)=>{
            board_list.push({...b.data()})
        })
        
        //넣어준다 리덕스 데이터에
        dispatch(loadList(board_list))
    }
}



export const addListFB = (user_word) => {
    return async function(dispatch){
        const docRef = await addDoc(collection(db,"word"), user_word)
        // dispatch(addList(user_word))
        
    }

}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case "board/LOAD_LIST" : {
            return {...state,boardList:action.board_list }
        }
        case "board/ADD_LIST" :{
            console.log(action);
            console.log(state);
            const new_list = [...state.boardList, action.user_word]
        return {...state, boardList : new_list};
    }
    
        default:
            return state;
    }
}