import clientPromise from '../../../lib/mongodb'
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const { product_id } = req.query;
    const client = await clientPromise
    const db = client.db();
    const data = await db.collection("products").findOne({ _id: new ObjectId(product_id) });

    res.status(200).json(data)
}