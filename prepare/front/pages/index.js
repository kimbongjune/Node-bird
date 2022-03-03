import Applayout from './../components/Applayout';
import PostCard from '../components/PostCard';
import PostForm from "../components/PostForm";
import {useEffect} from "react";
import Head from "next/head";
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POST_REQUEST } from './../reducers/post';

const Home = () =>{
    const {me} = useSelector((state) => state.user);
    const {mainPosts, hasMorePost, loadPostLoading} = useSelector((state) => state.post);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch({
            type : LOAD_POST_REQUEST,
        });
    }, []);

    useEffect(() =>{
        function onScroll(){
            console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight-300){
                if(hasMorePost && !loadPostLoading){
                    dispatch({
                        type : LOAD_POST_REQUEST,
                    });
                }
            }
        }
        window.addEventListener("scroll", onScroll);
        return () =>{
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasMorePost, loadPostLoading])

    
    return(
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <Applayout>
                {me && <PostForm/>}
                {mainPosts.map((post, index) => <PostCard key={post.id} post={post}/>)}
            </Applayout>
        </>
    );
};

export default Home;