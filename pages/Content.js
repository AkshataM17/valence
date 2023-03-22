
import { FaHandsHelping } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";

const Content = () => {
  return (
    <div classname="content" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, marginTop: "10%", margin:"10%"}}>
    <div className="content-desc" style={{ padding: "2%", backgroundColor: "rgb(75, 1, 80, 60%)", borderRadius: "5%"}}>
        <h3 style={{ padding: "10%", fontSize: "22px"}}>Connect</h3>
        <p style={{marginBottom: "8%", fontSize: "18px"}}> Find similar minded reseachers in DeSci</p>
    </div>
    <div className="content-desc" style={{ padding: "2%", backgroundColor: "rgb(75, 1, 80, 60%)", borderRadius: "5%"}}>
        {/* <GrMoney style={{width: "50px", height:"50px", color: "white"}}/> */}
        <h3 style={{ padding: "10%", fontSize: "22px"}}>Donate</h3>
        <p style={{marginBottom: "8%", fontSize: "18px"}}>Donate to the scientific work which creates an impact</p>
    </div>
    <div className="content-desc" style={{ padding: "2%", backgroundColor: "rgb(75, 1, 80, 60%)", borderRadius: "5%"}}>
        <h3 style={{ padding: "10%", fontSize: "22px"}}>Explore</h3>
        <p style={{marginBottom: "8%", fontSize: "18px"}}>Explore opportunities such as finding collaborators and investors</p>
    </div>
  </div>
  )
}

export default Content
