import './App.css';
function App() {

  return (
    <>
      <div className="container" >
        <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px', color: '#676a6e' }}>COMMUNITIES WE MANAGE</h1>
        <div className="row">

          <div className="col">
            <div className="card" >
              <img src="./community-images/arabian-ranches.jpg" style={{ height: '300px' }} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Arabian Ranches offers a mordern interpretation of the soothing charam of the surrounding desertscape. The development features a number of residential communities that draw inspiration from spanish.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Arabian Ranches</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="./community-images/arabian-ranches-ii.jpg" style={{ height: '300px' }} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Arabian Ranches offers a mordern interpretation of the soothing charam of the surrounding desertscape. The development features a number of residential communities that draw inspiration from spanish.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Arabian Ranches ||</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="./community-images/downtown-dubai.jpg" style={{ height: '300px' }} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Arabian Ranches offers a mordern interpretation of the soothing charam of the surrounding desertscape. The development features a number of residential communities that draw inspiration from spanish.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Arabian Ranches</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" >
              <img src="./community-images/arabian-ranches.jpg" style={{ height: '300px' }} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Arabian Ranches offers a mordern interpretation of the soothing charam of the surrounding desertscape. The development features a number of residential communities that draw inspiration from spanish.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Arabian Ranches</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="./community-images/arabian-ranches.jpg" style={{ height: '300px' }} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Arabian Ranches offers a mordern interpretation of the soothing charam of the surrounding desertscape. The development features a number of residential communities that draw inspiration from spanish.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Arabian Ranches</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="./community-images/downtown-dubai.jpg" style={{ height: '300px' }} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Arabian Ranches offers a mordern interpretation of the soothing charam of the surrounding desertscape. The development features a number of residential communities that draw inspiration from spanish.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Arabian Ranches</small>
              </div>
            </div>
          </div>


        </div>
      </div>


<div className="container" style={{marginBottom:'300px', width:'75%' , marginLeft:'12%'}}>
<h1 className="text-center" style={{ margin: '35px 0px', marginTop: '300px', color: '#676a6e' }}>OUR SERVICES</h1>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className="image-container">
              <img
                src="./community-images/dubai-hills-estate.jpg"
                alt="Image 1"
                className="img-fluid"
              />
              <div className="image-title">DUBAI HILLS ESTATE</div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="image-container">
              <img
                src="./community-images/dubai-marina.png"
                alt="Image 1"
                className="img-fluid"
              />
              <div className="image-title">DUBAI MARINA</div>
            </div>   </div>
          <div className="carousel-item">
          <div className="image-container">
              <img
                src="./community-images/emirates-living.jpg"
                alt="Image 1"
                className="img-fluid"
              />
              <div className="image-title">EMIRATES LIVING</div>
            </div>   </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      </div>
    </>
  );
};


export default App;
