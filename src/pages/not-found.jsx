import { Link } from "react-router"

const styles = {
    container:{
        texAlign: 'center',
        padding:'80px 20px',
        color:'#fff'
    },

    title:{
        fontSize: '72px',
        marginBottom: '20px'
    },
    message:{
        fontSize:'18px'
    }
}

const NotFound = () => {
  return (
    <div style={styles.container}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.message}>
            ops! A página que voc~e está procurando não existe
        </p>      
    </div>
  )
}

export default NotFound
