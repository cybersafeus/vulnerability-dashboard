import styles from '../styles/Dashboard.module.css'

export default function DashboardComponent({products}) {
    return (
        <div className={styles.grid}>
            { 
                products.map(data => {
                   return <div key= {data.id} className={styles.card}>
                        <h2>
                            {data.title}
                        </h2>
                    </div>
                })
            }
            <div>
            </div>
        </div>
    )
}

