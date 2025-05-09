import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function GithubUser({login}) {    
    const { loading, data, error } = useFetch(
        `https://api.github.com/users/${login}`
    );

    if (loading) return <h1>loading...</h1>;
    if (error) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
    }
    
    const { avatar_url, login, name, location } = data;

    return (<div className="githubUser">
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

