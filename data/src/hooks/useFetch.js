import React, { useState, useEffect } from "react";

export function useFetch(uri) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!uri) return;
        fetch(uri)
            .then(response => {
                console.log(response);

                return response.json();
            })
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [uri]);

    return {
        loading,
        error,
        data
    }
}