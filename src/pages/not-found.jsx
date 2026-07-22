import { Link } from "react-router"

const styles = {
    container:{
        textAlign: 'center',
        padding:'80px 20px',
        color:'#fff'
    },

    title:{
        fontSize: '72px',
        marginBottom: '20px'
    },
    message:{
        fontSize:'18px',
        marginBottom: '30px'
    },
    link:{
        textDecoration:'none',
        color:'#007bff',
        fontWeight:'bold'
    }
}

const NotFound = () => {
  return (
    <div style={styles.container}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.message}>
            Ops! A página que você está procurando não existe.
        </p>
        <Link style={styles.link} to={'/'}> 🡐 voltar para a Home</Link>      
    </div>
  )
}

export default NotFound
