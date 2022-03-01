import shortId from "shortid";
import produce from "immer";

export const initialState = {
    mainPosts : [{
        id:1,
        User :{
            id:1,
            nickname:"kim",
        },
        content:"첫 번째 게시글 #해시태그 #익스프레스",
        Images : [
            {
                id : shortId.generate(),
                src : "https://scribemedia.com/wp-content/uploads/2018/11/0-Should-You-Write-a-Book-700x406.jpg",
            },{
                id : shortId.generate(),
                src : "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
            },{
                id : shortId.generate(),
                src : "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
            }],
        Comments :[{
            id : shortId.generate(),
            User:{
                id : shortId.generate(),
                nickname : "ree",
            },
            content : "123123123123",
        },{
            id : shortId.generate(),
            User:{
                id : shortId.generate(),
                nickname : "park",
            },
            content: "content",
        }],
    }],
    imagePaths :[],
    addPostLoading : false,
    addPostDone : false,
    addPostError : null,
    removePostLoading : false,
    removePostDone : false,
    removePostError : null,
    addCommentLoading : false,
    addCommentDone : false,
    addCommentError : null,
}

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";


export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";


export const addPost = (data) =>({
    type : ADD_POST_REQUEST,
    data,
});

export const addComment = (data) =>({
    type : ADD_COMMENT_REQUEST,
    data,
});

const dummyPost =(data) => ({
    id : data.id,
    content : data.content,
    User :{
        id:1,
        nickname:"kim",
    },
    Images : [],
    Comments : [],
});

const dummyComment = (data) =>({
    id : shortId.generate(),
    content : data,
    User : {
        id : 1,
        nickname : "kim",
    },
});

const reducer = (state = initialState, action) =>{
    return produce(state, (draft) =>{
        switch(action.type){
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(dummyPost(action.data));
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
                draft.removePostLoading = false;
                draft.removePostDone = true;
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS:{
                const post = draft.mainPosts.find((V) => V.id === action.data.postId);
                post.Comments.unshift(dummyComment(action.data.content));
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
                // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
                // const post = {...state.mainPosts[postIndex]};
                // post.Comments = [dummyComment(action.data.content), ...post.Comments];
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = post;
                // return{
                //     ...state,
                //     mainPosts,
                //     addCommentLoading : false,
                //     addCommentDone : true,
                // };
            }
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;
            default:
                break;
        }
    });
}

export default reducer;