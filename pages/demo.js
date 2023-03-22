import Image from "next/image";
import { GoMortarBoard} from "react-icons/go";
import { AiFillLock } from "react-icons/ai";

const Demo = () => {
  return (
    <div>
        <div className="profile-cover">
        </div>
    <div>
      <Image className="demo-image"
      src="/pexels-pixabay-220453.jpg"
      alt="profile-image"
      width={170}
      height={170}
      />
    </div>
    <div>
        <h2 className="h2-demo">John Doe</h2>
        <h3 className="h3-demo"> <GoMortarBoard/>University Of Open Science</h3>
    </div>
    <div>
        <button className="btn-demo">Articles</button>
        <button className="btn-demo-active">Publications</button>
        <button className="btn-demo">Preprints</button>
        <button className="btn-demo">Resume</button>
        <button className="btn-demo">Current Projects</button>
    </div>
    <div className="card-section">
    <div class="card">
        <div class="container">
        <h3><b>Bitcoin: A peer-to-peer electrocnic cash system</b></h3>
        <p><b>Satoshi Nakamoto</b></p>
        <p>Abstract. A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution. </p>
        <button className="card-button">Read more</button>
        </div>
    </div>
    <div class="card" style={{backgroundColor: "rgb(75, 1, 80, 60%)"}}>
        <div class="container">
        <h3><b>Ethereum Whitepaper</b></h3>
        <p ><b>Vitalik Buterin</b></p>
        <p style={{color: "light-gray"}}>The anonymous e-cash protocols of the 1980s and the 1990s, mostly reliant on a cryptographic primitive known as Chaumian blinding, provided a currency with a high degree of privacy, but the protocols.. </p>
        <button className="card-button"><AiFillLock/>Request Access</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Demo
