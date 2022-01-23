const { SocketLabsClient } = require('@socketlabs/email');

export default async function handler(req, res) {


    switch (req.method) {
        case 'GET': {
            return await getTemplate(req, res);
        }

        case 'POST': {
            return await saveTemplate(req, res);
        }

        case 'PUT': {
            return res.status(501).json();
        }

        case 'DELETE': {
            return res.status(501).json();
        }
    }
}

async function getTemplate(req, res) {
    // const {SOCKET_LAB_SERVER_ID,SOCKET_LAB_API_KEY} = process.env;
    // console.log({SOCKET_LAB_SERVER_ID,SOCKET_LAB_API_KEY})
    // const client = new SocketLabsClient(parseInt(SOCKET_LAB_SERVER_ID), SOCKET_LAB_API_KEY);
   
    res.status(200).json({ success: 'Get Template' })

}

async function saveTemplate(req, res) {
    // const {SOCKET_LAB_SERVER_ID,SOCKET_LAB_API_KEY} = process.env;
    // console.log({SOCKET_LAB_SERVER_ID,SOCKET_LAB_API_KEY})
    // const client = new SocketLabsClient(parseInt(SOCKET_LAB_SERVER_ID), SOCKET_LAB_API_KEY);
   
    res.status(200).json({ success: 'Save Template' })

}