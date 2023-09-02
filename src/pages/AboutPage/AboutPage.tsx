import {CounterMemo} from "../../components/Counter";
import {useState} from "react";

const AboutPage = () => {
    const [string, setString] = useState('')

    return <div>
        <input value={string} onChange={(e)=>setString(e.target.value)} />
        <CounterMemo countProps={string} />
    </div>
}


export default AboutPage