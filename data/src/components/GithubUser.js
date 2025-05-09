import React from "react";
import { useFetch } from "../hooks/useFetch";
import Fetch from "./Fetch";


export default function GithubUser({login}) {    
   return (
        <Fetch 
            uri={`https://api/github.com/${login}`}
            renderSuccess={UserDetails}
        />
    )
}

function UserDetails({ data }) {
    const { avatar_url, login, name, location } = data;

    return (
        <div className="githubUser">
            <img
                src={avatar_url}
                alt={login}
                style={{ width: 200 }}
            />
            <div>
                <h1>{data.login}</h1>
                {name && <p>{name}</p>}
                {location && <p>{location}</p>}
            </div>
        </div>)
}