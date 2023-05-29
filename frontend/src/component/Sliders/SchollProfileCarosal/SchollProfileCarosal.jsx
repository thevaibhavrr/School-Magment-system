import React from 'react'
import "./schollCarosal.css"

function SchollProfileCarosal() {
  return (
    <>
      {/* <div
        id="schoolImage"
        className="carousel slide carousel-fade w-50"
        data-bs-ride="carousel"
        data-bs-interval="1000"
      >
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dx0Eq5s4IUk8OUrU996Hika7rPDU4ApoRjHbxKpKjOauWPCOlWTYmclZZ11GqwgcG2c&usqp=CAU"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item  active">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Hibbing_High_School_2014.jpg/1200px-Hibbing_High_School_2014.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyRVbsZ0-43Xz3gEodNiTT5IyHi0Go9C4MY0pBU0VaZB_9jWov5brMbPooTBSyKqUDOQ&usqp=CAU"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#schoolImage"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#schoolImage"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}


    <div className="container sclcarosal " style={{width:"300px" }} >
        <div id="demo" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="1000" data-bs-pause="false"  >
            <div className="carousel-indicators" >
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" ></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1" ></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2" ></button>
            </div>
            <div className="carousel-inner" >
                <div className="carousel-item  " >
                    <img src="https://c0.wallpaperflare.com/preview/934/801/70/youth-active-jump-happy.jpg" alt="" srcset="" className="w-100 d-block"/>
                    <div className="carousel-caption" ><h4>slide1</h4></div>
                </div>
                <div className="carousel-item active " >
                    <img src="https://c4.wallpaperflare.com/wallpaper/395/275/783/sunset-mountains-people-hd-wallpaper-thumb.jpg" alt="" className="w-100 d-block" srcset=""/>
                    <div className="carousel-caption" ><h4>slide2</h4></div>

                </div>
                <div className="carousel-item" >
                    <img src="https://c4.wallpaperflare.com/wallpaper/31/309/242/body-of-water-during-sunset-wallpaper-preview.jpg" alt="" className="w-100 d-block" srcset=""/>
                    <div className="carousel-caption" ><h4>slide3</h4></div>

                </div>
            </div>

            <button className="carousel-control-prev" data-bs-target="#demo" data-bs-slide="prev" >
                <span className="carousel-control-prev-icon" ></span>
            </button>
            <button className="carousel-control-next" data-bs-target="#demo" data-bs-slide="next" >
                <span className="carousel-control-next-icon" ></span>
            </button>

        </div>

    </div>

      {/* <div className="container" >
        <div className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" >
            <div className="carousel-inner" >
                  <div className="carousel-inner" >
                <div className="carousel-item active " >
                    <img src="https://c0.wallpaperflare.com/preview/934/801/70/youth-active-jump-happy.jpg" alt="" srcset="" className="w-100 d-block"/>
                    <div className="carousel-caption" ><h4>slide1</h4></div>
                </div>
                <div className="carousel-item" >
                    <img src="https://c4.wallpaperflare.com/wallpaper/395/275/783/sunset-mountains-people-hd-wallpaper-thumb.jpg" alt="" className="w-100 d-block" srcset=""/>
                    <div className="carousel-caption" ><h4>slide2</h4></div>

                </div>
                <div className="carousel-item" >
                    <img src="https://c4.wallpaperflare.com/wallpaper/31/309/242/body-of-water-during-sunset-wallpaper-preview.jpg" alt="" className="w-100 d-block" srcset=""/>
                    <div className="carousel-caption" ><h4>slide3</h4></div>

                </div>
            </div>
            </div>
        </div>
      </div> */}
    </>
  );
}

export default SchollProfileCarosal