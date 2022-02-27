import Applayout from './../components/Applayout';
import PostCard from '../components/PostCard';
import PostForm from "../components/PostForm";

import Head from "next/head";
import { useSelector } from 'react-redux';

const Home = () =>{
    const {me} = useSelector((state) => state.user);
    const {mainPosts} = useSelector((state) => state.post);
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