import axios from 'axios';

const GITHUB_ADDRESS = 'https://api.github.com';
const GITHUB_OWNER = 'INVAIZ';
const GITHUB_REPOSITORY = 'invaiz-studio-release';

export const requestGetReleases = async () => {
    const req = `${GITHUB_ADDRESS}/repos/${GITHUB_OWNER}/${GITHUB_REPOSITORY}/releases`;

    const config = {
        headers: {
            Accept: 'application/vnd.github.v3+json'
        }
    };

    const res = await axios.get(req, config);
    return res;
}