import axios from 'axios';

export default axios.create({
    baseURL: `http://agentbrainbox.test/v_1`
        // baseURL: `https://api.agentbrainbox.com/v_1`
});
export const baseUrl = `http://agentbrainbox.test/v_1`