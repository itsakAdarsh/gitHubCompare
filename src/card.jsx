import React,{useEffect, useState} from 'react';
export default function Card(props) {
    const id = props.name;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const link=("https://api.github.com/users/" + id);
    const [items, setItems] = useState({
        name: "",
        gid:"",
        image: "",
        follower: "",
        following: "",
        prepos: "",
        pgits: "",
        url:""
    });
    useEffect
    (() => {
        fetch(link)
            .then(res => res.json())
            
            .then(
                (result) => {
                    console.log(result);
                    setIsLoaded(true);
                    setItems({
                        name:result.name,
                        gid: result.login,
                        image: result.avatar_url,
                        follower: result.followers,
                        following: result.following,
                        prepos: result.public_repos ,
                        pgits: result.public_gists,
                        url:result.html_url

                    });
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    },[])
    if(error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div className="loading"> Loading...</div>;
    } 
    else{
    return(
        <div>
        <div className="cards">
            <div className="cardTop">
                <div>
                    <div className="cardImg">
                        <img src={items.image} alt="avatar" height="100px" width="100px"/>
                    </div>
                    <h2>{items.name}</h2>
                    <h4>{items.gid}</h4>
                </div>
            </div>
            <div className="classBottom">
                    <h3>Following : {items.following}</h3>
                    <h3>Followers : {items.follower}</h3>
                    <h3>Public Gits : {items.pgits}</h3>
                    <h3>Public repos : {items.prepos}</h3>
                    <h3>URL : <a href={items.url}>{items.url}</a></h3>
            </div>
        </div>
        </div>
    );
}
}

