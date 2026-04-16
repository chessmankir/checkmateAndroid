import {useEffect, useState} from "react";

export function useMyClan(){
    const [myClans, setMyClans] = useState([]);
    const [selectedClanId, setSelectedClanId] = useState<number>(1);

    useEffect(() => {
        (async () => {
            const backend = "http://192.168.0.30:4000/api/android/myclan";
            try {
                const response = await fetch(backend, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        clan_id: 1
                    })
                });
                const data = await response.json();
                console.log(data);
                if(data.ok){
                    setMyClans(data.clans);
                }
            }
            catch (e){
                console.error(e);
            }
        })();
    }, []);

    return {myClans, selectedClanId, setSelectedClanId};
}