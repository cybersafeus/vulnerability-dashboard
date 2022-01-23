
import clientPromise from '../../../../lib/mongodb'
import { ObjectId } from 'mongodb';
const { SocketLabsClient } = require('@socketlabs/email');



export default async function handler(req, res) {


    switch (req.method) {
        case 'GET': {
            return res.status(501).json();
        }

        case 'POST': {
            return await sendSampleTemplate(req, res);
        }

        case 'PUT': {
            return res.status(501).json();
        }

        case 'DELETE': {
            return res.status(501).json();
        }
    }
}

async function sendSampleTemplate(req, res) {

    const { productId, emailId } = req.body;
    console.log(productId)

    const client = await clientPromise
    const db = client.db();
    const dbRes = await db.collection("products").findOne({ _id: new ObjectId(productId) });

    const response = await fetch(`${process.env.NVD_HOST}/${process.env.CVE_ENDPOINT}/?apiKey=${process.env.NVD_API_KEY}&cpeMatchString=${dbRes.cpe23Uri}`);
    const vul_data = await response.json();
    const { CVE_Items: vulnerabilities } = vul_data.result
    const data = constructGridData(vulnerabilities);

    const html = constructHTML(data);

    console.log(html)

    const status = sendEmail(html)

    res.status(200).json({ status })

}
async function sendEmail(html) {
    const {SOCKET_LAB_SERVER_ID,SOCKET_LAB_API_KEY} = process.env;
    console.log({SOCKET_LAB_SERVER_ID,SOCKET_LAB_API_KEY})
    const client = new SocketLabsClient(parseInt(SOCKET_LAB_SERVER_ID), SOCKET_LAB_API_KEY);

    const message = {
        to: "araju@cybersafeus.com", //stippan@cybersafeus.com, nemad@accentucom.com
        from: "stippan@cybersafeus.com",
        subject: "Vulnerabilities for your Product",
        textBody: "This message was sent using the SocketLabs Node.js library!",
        htmlBody: html,
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

    return 200;

}
const constructGridData = (vulnerabilities) => {
    if (vulnerabilities == null || vulnerabilities == undefined || vulnerabilities.length == 0) {
        return [];
    }
    return vulnerabilities.map(data => {
        const { cve, impact, publishedDate, lastModifiedDate } = data;
        return {
            id: cve.CVE_data_meta.ID,
            assigner: cve.CVE_data_meta.ASSIGNER,
            description: cve.description.description_data[0].value,
            severity: impact.baseMetricV2.severity,
            impactScore: impact.baseMetricV2.impactScore,
            publishedDate,
            lastModifiedDate,
            references: cve.references.reference_data

        }
    })
}

const constructHTML = (data) => {
    
    const tableData = data.map(d => {
        console.log(d.references)
        const ref = d.references.map(link => `<a href=${link.url}>${link.name}</a><br>`)

        return `<tr>
            <td>${d.id}<td/>
            <td>${d.severity}<td/>
            <td>${d.impactScore}<td/>
            <td>${d.description}</td>
            <td>${d.publishedDate}<td/>
            <td>${d.lastModifiedDate}<td/>
            <td>${ref}</td>
        </tr>`
    })
    const template = `<table border style="width:100%">
        <tr>
            <th>CVE ID</th>
            <th>Severity</th>
            <th>Impact Score</th>
            <th style="width:50%">Description</>
            <th>Published Date</th>
            <th>Last Modified</th>
            <th>References</>
        </tr>
        ${tableData}
    </table>`

    return template.replace(/(\r\n|\n|\r)/gm, "");
}