import Applayout from './../components/Applayout';
import Head from "next/head";
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';
import Router from "next/router";
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from "react";
import { LOAD_FOLLOWERS_REQUEST } from '../reducers/user';
import { LOAD_FOLLOWINGS_REQUEST } from './../reducers/user';

const Profile = () =>{
    const dispatch = useDispatch();
    const {me} = useSelector((state) => state.user);

    useEffect(() =>{
        dispatch({
            type : LOAD_FOLLOWERS_REQUEST,
        });
        dispatch({
            type : LOAD_FOLLOWINGS_REQUEST,
        });
    }, []);

    useEffect(()=>{
        if(!(me && me.id)){
            Router.push("/");
        }
    }, [me && me.id]);
    
    if(!me){
        return null;
    }
    return(
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <Applayout>
            <NickNameEditForm/>
            <FollowList header="팔로잉" data={me.Followings}/>
            <FollowList header="팔로워" data={me.Followers}/>
        </Applayout>
        </>
    );
}

export default Profile;