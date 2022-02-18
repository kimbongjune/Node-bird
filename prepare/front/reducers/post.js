export const initialState = {
    mainPosts : [{
        id:1,
        User :{
            id:1,
            nickname:"kim",
        },
        content:"첫 번째 게시글 #해시태그 #익스프레스",
        Images : [{
            src : "https://scribemedia.com/wp-content/uploads/2018/11/0-Should-You-Write-a-Book-700x406.jpg",
            },{
                src : "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
            },{
                src : "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
            }],
        Comments :[{
            User:{
                nickname : "ree",
            },
            content : "123123123123",
        },{
            User:{
                nickname : "park",
            },
            content: "content",
        }],
    }],
    imagePaths :[],
    postAdded : false,
}

const ADD_POST = "ADD_POST";
export const addPost = {
    type : ADD_POST,
}

const dummyPost = {
    id:2,
    content:"더미데이터",
    User :{
        id:1,
        nickname:"kim",
    },
    Images : [],
    Comments : [],
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                mainPosts:[dummyPost, ...state.mainPosts],
                postAdded:true,
            };
        default:
            return state;
    }
}

export default reducer;