import Applayout from './../components/Applayout';
import Head from "next/head";
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';

const Profile = () =>{
    const followerList = [{nickname : "kim"}, {nickname : "lee"}, {nickname : "park"}];
    const followingList = [{nickname : "kim"}, {nickname : "lee"}, {nickname : "park"}];

    return(
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <Applayout>
            <NickNameEditForm/>
            <FollowList header="팔로잉 목록" data={followingList}/>
            <FollowList header="팔로워 목록" data={followerList}/>
        </Applayout>
        </>
    );
}

export default Profile;