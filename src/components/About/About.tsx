import "../../App.css";
import styles from "./About.module.css";
const About =()=>{
    return <div className={styles["container"]}>
        <h4>A LITTLW ABOUT US / 03</h4>
        <h1>Small enough to care. <br /><span>Sharp enough to deliver</span></h1>
        <h2>We are a digital marketing wing for ambitious businesses that value momentum over theatre.</h2>
        <p>Our team brings strategy, design, development, and growth into one room. That means fewer handoffs, better decisions, and digital work that earns its place.</p>
        <div className={styles['data-container']}>
            <div><h2>10+</h2>
            <h5>years making digital useful</h5>
            </div>
            <div><h2>24</h2>
            <h5>years making digital useful</h5>
            </div>
            <div><h2>01</h2>
            <h5>years making digital useful</h5>
            </div>
        </div>
    </div>
}
export default About;