import React, { useEffect, useState } from 'react'
// import '../App.css'
// import './Github.css'
import style from './Github.module.css'

const GithubUser = (props) => {

    let [user , setUser] = useState({
                            imgUrl:"",
                            followers:0,
                            following:0
                        })
                        
    useEffect( ()=>{
        async function getUser(username){
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            // console.log(data);
            let { avatar_url , followers , following } = data;
            setUser(()=>{
                return {
                    imgUrl : avatar_url,
                    followers,
                    following
                }
            })
        }
        getUser(props.username);

    } , [] )

  return (
    <article className={style.flex}>
    
        <figure className={style.user}>

            <img src={user.imgUrl} alt="github-pic" />
            <figcaption>
                <p>Username: {props.username} </p>
                <p>Following: {user.following} </p>
                <p>Followers: {user.followers} </p>
            </figcaption>

        </figure>

    </article>
  )
}

export default GithubUser