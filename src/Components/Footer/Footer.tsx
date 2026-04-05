import styles from './Footer.module.css'

interface Props {
    style?: object
}

const Footer = (props: Props) => {
    const { style } = props
    return (
        <div style={{ ...style }} className={styles.footerContainer}>

        </div>
    )
}

export default Footer