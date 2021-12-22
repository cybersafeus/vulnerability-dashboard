import DashboardComponet from '../components/Dashboard'
import PrivateLayout from '../components/PrivateLayout'
import clientPromise from '../lib/mongodb'
export default function Dashboard({ products }) {
  return (
    <PrivateLayout>
      <DashboardComponet products={products} />
    </PrivateLayout>
  )
}
export async function getServerSideProps(context) {
  const client = await clientPromise

  const db = client.db();

  const data = await db.collection("products").find({}).limit(20).toArray();

  const products = JSON.parse(JSON.stringify(data))

  return {
    props: { products },
  }
}