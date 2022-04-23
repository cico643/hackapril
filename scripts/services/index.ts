import axios from 'axios';
import ServiceCall from "@smartface/extension-utils/lib/service-call"

const GithubAPI = new ServiceCall({
    baseUrl: 'https://api.github.com',
    logEnabled: true,
    headers: {
        'Accept': 'application/vnd.github.v3+json'
    }
})



interface IRequestParams {
    organization: string;
    repo: string;
    branch: string
}

interface IRequestParams2 {
    organization: string;
    repo: string;
}


export async function GetAllCommitsForGivenRepoAndBranch({organization, repo, branch}: IRequestParams) {
    try {
        const response = await GithubAPI.request(`/repos/${organization}/${repo}/commits\?sha\=${branch}\&per_page\=10\&page\=0`, {
            method: 'GET'
        });
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }   
}

export async function GetRepoInfo({organization, repo}: IRequestParams2) {
    try {
        const response = await GithubAPI.request(`/repos/${organization}/${repo}`, {
            method: 'GET'
        });
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }   
}

// AXIOS

// const GithubAPI = axios.create({
//     baseURL: 'https://api.github.com',
//     headers: {
//         'Accept': 'application/vnd.github.v3+json'
//     }
// })

// export async function GetAllCommitsForGivenRepoAndBranch({organization, repo, branch}: IRequestParams) {
//     try {
//         const response = await GithubAPI.get(`/repos/${organization}/${repo}/commits\?sha\=${branch}\&per_page\=10\&page\=0`);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }   
// }