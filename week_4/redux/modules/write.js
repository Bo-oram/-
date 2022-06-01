// 입력값을 리덕스에 저장하자

const SET_WORD = "word/SET_WORD"
const SET_MEAN = "word/SET_MEAN"
const SET_EXAMPLE = "word/SET_EXAMPLE"

export const setWord = (word) => {
    return {type:SET_WORD, word};
};
export const setMean = (mean) => {
    return {type:SET_MEAN, mean};
};
export const setExample = (example) => {
    return {type:SET_EXAMPLE, example};
};

const initialState = {

}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "word/SET_WORD": {    
            console.log(action)        
            return {...state,word:action.word};
        }
        case "word/SET_MEAN": {    
            console.log(action)        
            return {...state,word:action.mean};
        }
        case "word/SET_EXAMPLE": {    
            console.log(action)        
            return {...state,word:action.example};
        }

            

        default:
            return state;

    }

}