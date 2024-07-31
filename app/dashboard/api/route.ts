import {envConfig} from "@/app/lib/envConfig";

export async function getPatients() {
    const reqConfig = {
        headers: {
            'X-Auth-Token': ''
        }
    }
    const res = await fetch(`${envConfig.apiEndpoint}/users/getAllClients`, reqConfig);
    return res.json();
    // const data = await res.json();
    // return Response.json({data})
}
