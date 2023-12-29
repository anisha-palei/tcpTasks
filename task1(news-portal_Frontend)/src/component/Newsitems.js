import Sidebar from "./Sidebar";
import "../App.css";
function Newsitems(probs) {
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">{probs.title}</h6>
              <p className="card-text">{probs.description}</p>
              <p className="card-text">
                <small style={{textAlign:"left"}} className="text-muted">{probs.publishedAt}</small>
              </p>
              <span
                style={{ backgroundColor: "black", marginLeft: "-50%" }}
                className="badge badge-warning "
              >
                {probs.source}
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <img
              style={{ height: "45%" }}
              className="card-img-top "
              src={probs.imageUrl}
              alt="No image"
            />
          </div>
        </div>
        <a
          href={probs.url}
          style={{ marginLeft: "75%" }}
          target="_blank"
          type="button"
          className="btn btn-light"
        >
          more...
        </a>
      </div>
    </>
  );
}
export default Newsitems;
