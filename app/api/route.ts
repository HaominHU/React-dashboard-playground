import {envConfig} from "@/app/lib/envConfig";
import {cookies} from "next/headers";

export async function login(username?: string, password?: string) {
    username = 'demoleon';
    password = '123456';

    const response = await fetch(`${envConfig.apiEndpoint}/login`, {
        method: 'POST',
        headers: {
            'Authorization': `PORTAL ${btoa(`${username}:${password}`)}`,
            'Content-Type': 'application/json',
            observe: 'response'
        },
        body: JSON.stringify({
            username,
            password
        })

    })
    return response.headers.get('x-auth-token');
}
