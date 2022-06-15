import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState ={
        data: []
    }

//API에서 포스트 데이터 가져오기
export const fetchPost = createAsyncThunk(
    'post/fetchPost',
    async () => {
        const response = await axios.get('http://localhost:5002/posting');
        return response.data
    }
)

//API에 포스트 저장하기
export const updatePoste = createAsyncThunk(
    'post/updatePost',
    async (newPost) => {
        const response = await axios.post('http://localhost:5002/posting',newPost)
        return response.data
    }

)


// api에서 불러와 저장해둔 포스트
export const postSlice = createSlice({
    name:'post',
    initialState:  {
        data: [
            {id: 1, email: 'dev@dev.com', type: 'A', text: 'aaaa'},
            {id: 1, email: 'dev@dev.com', type: 'A', text: 'aaaa'},
            {id: 1, email: 'dev@dev.com', type: 'A', text: 'aaaa'},
        ],
    },
    reducers: {
        listLoad :(state, action) => { 
            state.data = action.payload                      
        },
        listUpdate :(state, action) => {
            console.log('ddddd')
            state.data.push(action.payload) 
            console.log(action.payload)      

        }   
         
    },
    extraReducers: {
        [fetchPost.pending.type]: (state = initialState, action) => { // 호출 전
            state.data = console.log("호출전")
        },
        [fetchPost.fulfilled.type]: (state = initialState , action) => { // 성공            
            state.data = action.payload
        },
        [fetchPost.rejected.type]: (state = initialState, action) => {  // 실패
            state.data = console.log("실패")
        },

    }
})



export const {listLoad, listUpdate} = postSlice.actions
export default postSlice.reducer