const { SocketLabsClient } = require('@socketlabs/email');

export default async function handler(req, res) {


    switch (req.method) {
        case 'GET': {
            return res.status(501).json();
        }

        case 'POST': {
            return await sendEmail(req, res);
        }

        case 'PUT': {
            return res.status(501).json();
        }

        case 'DELETE': {
            return res.status(501).json();
        }
    }
}

async function sendEmail(req, res) {
    const {SOCKET_LAB_SERVER_ID,SOCKET_LAB_API_KEY} = process.env;
    console.log({SOCKET_LAB_SERVER_ID,SOCKET_LAB_API_KEY})
    const client = new SocketLabsClient(parseInt(SOCKET_LAB_SERVER_ID), SOCKET_LAB_API_KEY);

    const message = {
        to: "araju@cybersafeus.com",
        from: "stippan@cybersafeus.com",
        subject: "Hello from Cybersafeus",
        textBody: "This message was sent using the SocketLabs Node.js library!",
        htmlBody: "<html>This message was sent using the SocketLabs Node.js library!</html>",
        messageType: 'basic'
    };

    client.send(message).then(
        (res) => {
            
            console.log(`Success`,res);
        },
        (err) => {
            //Handle error making API call
            console.log(`Error`,err);
        });

    res.status(200).json({ success: true })

}