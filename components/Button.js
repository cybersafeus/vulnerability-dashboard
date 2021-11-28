import styles from '../styles/Button.module.css'
export default function Button({text, onClick}) {
    return (
        <div className = {styles.button}>
            <button type= "button" onClick = {onClick}> {text}<img src = "/arrow.png"></img>
            </button>
        </div>
    )
}
