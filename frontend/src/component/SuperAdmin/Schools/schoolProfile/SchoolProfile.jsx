import React from "react";
import "./schollProfile.css";
import { Link } from "react-router-dom";
function SchoolProfile() {
  return (
    <>
      <div className="SchoolProfile d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="2000" >
        <div className=" SchoolProfileCard text-center">
          <Link to="/schoollist">
            <i class="bi bi-x-lg crooslogo"></i>
          </Link>
          {/* schoolImage */}
          <div className="p-3">
            <img
              src="https://thumbs.dreamstime.com/b/generic-high-school-building-20262841.jpg"
              alt="schoolImg"
              className="schoolImages"
            />
            {/* <SchollProfileCarosal /> */}
          </div>
          {/* school name */}
          <div className="px-5">
            <h3>Ankur Higher Secondary School</h3>
            <p>
              <b>Address : </b> Radhika Palace, 103, Radhika Premier, Main Rd,
              Mahalaxmi Nagar, Indore, Madhya Pradesh 452001
            </p>
          </div>
          {/* school Details */}
          <div>
            <div className="p-5">
              <table class="table table-borderless">
                <tbody className="">
                  <tr>
                    <th scope="row">Owner</th>
                    <td>Gopal Kumar</td>
                    <td>
                      <img
                        src="https://assets.gqindia.com/photos/64366680b9fb8a03ecc322aa/master/w_1600%2Cc_limit/Mukesh-Ambani.jpeg"
                        alt="owner  "
                        className="SchoolOwnerImg"
                      />
                    </td>
                    <td>9876543210</td>
                    <td>Goaml@example.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Principal</th>
                    <td> Sanjay Sahu </td>
                    <td>
                      <img
                        src="https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_12/story_16378/assets/4.jpeg?time=1672218739"
                        alt="owner"
                        className="SchoolOwnerImg"
                      />
                    </td>
                    <td> 9876543210</td>
                    <td>6r4XR@example.com</td>
                  </tr>
                  <tr>
                    <th scope="row"> Voice Principal</th>
                    <td> Mahendra Singh </td>
                    <td>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSou_B6MQOwWLAFYT5iD_oHgelPgpSJRD14JQGZrDsxYTHFLakCBX0pxGqTsoW3s2UHA5U&usqp=CAU"
                        alt="owner"
                        className="SchoolOwnerImg"
                      />
                    </td>
                    <td> 9876543210</td>
                    <td>Goaml@example.com</td>
                  </tr>{" "}
                  <tr>
                    <th scope="row"> Contect team</th>
                    <td> Vishal Kumar </td>
                    <td>
                      <img
                        src="https://api.time.com/wp-content/uploads/2015/07/gettyimages-478585786.jpg?quality=85&w=2155"
                        alt="owner"
                        className="SchoolOwnerImg"
                      />
                    </td>
                    <td> 939823982</td>
                    <td>kjrnnek@example.com</td>
                  </tr>
                  <tr>
                    <th scope="row"> Contect team</th>

                    <td> Addesh patidar </td>
                    <td>
                      <img
                        src="https://www.contactmusic.com/pics/ln/20130711/100713_grown_ups_2_ny_prem_9/chris-rock-new-york-premiere-screening-of_3755656.jpg"
                        alt="owner"
                        className="SchoolOwnerImg"
                      />
                    </td>
                    <td> 799918982</td>
                    <td>keowm@example.com</td>
                  </tr>{" "}
                  <tr>
                    <th scope="row"> Contect team</th>
                    <td> Jitu khrol </td>
                    <td>
                      <img
                        src="https://lede-admin.capitalbnews.org/wp-content/uploads/sites/40/2022/12/davante_lewis.jpeg"
                        alt="owner"
                        className="SchoolOwnerImg"
                      />
                    </td>
                    <td> 710818982</td>
                    <td>jitu@example.com</td>
                  </tr>
                  <tr>
                    <th scope="row">School Contect </th>
                    <td>Office</td>
                    <td>
                      <img
                        src="https://5.imimg.com/data5/QN/CD/MY-927781/telephone-instrument-500x500.jpeg"
                        alt="phone"
                        className="SchoolOwnerImg"
                      />
                    </td>
                    <td>904034342</td>
                    <td>AnkurSchool@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row"> Total Teacher</th>
                    <td>20</td>
                    <td>
                      <img
                        src="https://png.pngtree.com/png-clipart/20190514/ourlarge/pngtree-cartoon-simple-dummy-holding-a-book-female-teacher-png-image_1034056.jpg"
                        alt="Teacher"
                        className="SchoolOwnerImg"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"> Total Student</th>
                    <td>300</td>
                    <td>
                      <img
                        src="https://images.hindustantimes.com/img/2021/10/06/550x309/95eda336-26ed-11ec-9d0a-2107028cb826_1633556397901.jpg"
                        alt="students"
                        className="SchoolOwnerImg"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolProfile;
