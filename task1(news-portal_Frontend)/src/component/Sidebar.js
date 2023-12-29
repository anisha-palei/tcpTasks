function Sidebar(probs){
    return(
     <div>
     <div style={{marginBottom:"7%"}} className="card bg-light" >
     <div className="card-body">
      <strong>{probs.title}</strong>
     </div>
     <a
          href={probs.url}
          style={{ marginLeft: "71%" }}
          target="_blank"
          type="button"
          className="btn btn-dark"
        >
          more...
        </a>
   </div>
      </div>
    )   
}
export default Sidebar;