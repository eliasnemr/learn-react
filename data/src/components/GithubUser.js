import React, { useEffect, useState } from "react";

const loadJSON = key => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export default function GithubUser({login}) {    
    const [data, setUserData] = useState(loadJSON(`user:${login}`));


    useEffect(() => {
        if (!data) return;
        console.log('current data', data);
        if (data.login === login) return;

        const { name, avatar_url, location } = data;
        saveJSON(`user:${login}`, {
            name,
            login,
            avatar_url,
            location
        });
    }, [data]);

    useEffect(() => {
        if (!login) return;
        if (data && data.login === login) return;

        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(setUserData)
            .catch(console.error);
    }, [login]);

    if (data) {
        return <pre>{JSON.stringify(data, null, 2)}</pre>
    }

    return <div>Not logged in yet!</div>
}

