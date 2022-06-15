// CurrentUser.js
const LOAD = 'users/LOAD'
const CREATE = 'users/CREATE';
const UPDATE = 'users/UPDATE'
const REMOVE = 'users/REMOVE'

const initialState = {
    list: [{
        email: "",
        password: "",
        username: ""
    }
    ]
}




//Action Creators
export function loadUsers(user) {
    console.log("사용자 정보 가져올거야")
    return { type: LOAD, user }
}

export function addUser(user){
    return {type:CREATE, user}
}

export function updateUser(user_index) {
    console.log("사용자 정보 수정할거야")
    return {type:UPDATE, user_index}
}

export function removeCurrentUser(user_index) {
    console.log("탈퇴할거야")
    return { type: REMOVE, user_index }
}


//reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "users/LOAD": {
            console.log("action.user:"+ action.user)
            return { list: action.user };
        }
        case "users/CREATE": {
            console.log("회원가입시킬거야")
            const new_user = [...state.list, action.user];
            return { list: new_user };
        }

        case "users/UPDATE": {
            console.log("이제 수정할거야!")
            const new_user = [action.user];
            console.log(new_user)
            return { list: new_user };
        }

        case "users/REMOVE": {
            console.log("이제 값을 삭제할거야")
            const new_user = [...state.list.filter(list => list !== action.user_index)];
            return { list: new_user };
        }

        default: return state;
    }
}