import Navbar from "./Navbar";
import News from "./News";
import Sidebar from "./Sidebar";
function Dashboard(probs){
return(
   <>
 
    <News data1={probs.data1}/>
    
   </>
)
}
export default Dashboard;