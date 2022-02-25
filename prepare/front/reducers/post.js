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
    addPostLoading : false,
    addPostDone : false,
    addPostError : null,
}

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";


export const addPost = (data) =>({
    type : ADD_POST_REQUEST,
});

export const addComment = (data) =>({
    type : ADD_COMMENT_REQUEST,
});

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
        case ADD_POST_REQUEST:
            return{
                ...state,
                addPostLoading : true,
                addPostDone : false,
                addPostError : null,
            }
        case ADD_POST_SUCCESS:
            return{
                ...state,
                mainPosts:[dummyPost, ...state.mainPosts],
                addPostLoading : false,
                addPostDone : true,
            };
        case ADD_POST_FAILURE:
            return{
                addPostLoading : false,
                addPostError : action.error,
            }
        case ADD_COMMENT_REQUEST:
            return{
                ...state,
                addCommentLoading : true,
                addCommentDone : false,
                addCommentError : null,
            }
        case ADD_COMMENT_SUCCESS:
            return{
                ...state,
                addCommentLoading : false,
                addCommentDone : true,
            };
        case ADD_COMMENT_FAILURE:
            return{
                addCommentLoading : false,
                addCommentError : action.error,
            }
        default:
            return state;
    }
}

export default reducer;