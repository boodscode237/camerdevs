import { Typewriter } from "react-simple-typewriter"
import "./ComingSoon.css"

const ComingSoon = () => {
    return (<div className="container">
        <h1>WELCOME TO CAMERDEVS</h1>
        <h1>
            We are:
        </h1>
        <h2>
            <span>
                <Typewriter words={["Brice Donald", "Joel Vianney"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </span>
        </h2>
         <h1>Site coming soon
             <span>
                <Typewriter words={[".", "..", "..."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </span>
         </h1>
    </div>)
}


export default ComingSoon