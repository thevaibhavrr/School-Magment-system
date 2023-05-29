import React from "react";
import "./AddSchool.css";

function AddSchool() {
  return (
    <>
      <form className="form container text-center  " data-aos="zoom-out-up" data-aos-duration="1500" >
        <h1>Add School</h1>
        <div className="row">
          {/* first coloum */}
          <div className="col-md-6 ps-5 text-start">
            <div className="allleftInputs d-flex flex-wrap">
              {/* input field */}
              <label htmlFor="schoolName">School Name:</label>
              <input
                type="text"
                name="schoolName"
                placeholder="Enter school name"
                required
              />
              <label htmlFor="City">City:</label>
              <input
                type="text"
                name="City"
                placeholder="Enter City"
                required
              />
              <label htmlFor="Address">Address:</label>
              <input
                type="text"
                name="Address"
                placeholder="Enter Address"
                required
              />
              <label htmlFor="OwnerName">Owner's Name:</label>
              <input
                type="text"
                name="OwnerName"
                placeholder="Enter Owner's name"
                required
              />
              <label htmlFor="OwnerImage">Owner Images:</label>
              <input
                type="file"
                id="OwnerImages"
                name="OwnerImages"
                accept="image/*"
              />
              <label htmlFor="OwnerEmail">Owner's Email:</label>
              <input
                type="text"
                name="OwnerEmail"
                placeholder="Enter Owner's Email"
                required
              />
              <label htmlFor="OwnerPhone">Owner's Phone Number:</label>
              <input
                type="tel"
                name="OwnerPhone"
                placeholder="Enter Owner's phone number"
                required
              />
              <label htmlFor="principalName">Principal's Name:</label>
              <input
                type="text"
                name="principalName"
                placeholder="Enter principal's name"
                required
              />
              <label htmlFor="PricipalImage">Pricipal Images:</label>
              <input
                type="file"
                id="PrincipalImages"
                name="PrincipalImages"
                accept="image/*"
              />
              <label htmlFor="principalEmail">Principal's Email:</label>
              <input
                type="email"
                name="principalEmail"
                placeholder="Enter principal's email"
                required
              />
              <label htmlFor="principalPhone">Principal's Phone Number:</label>
              <input
                type="tel"
                name="principalPhone"
                placeholder="Enter principal's phone number"
                required
              />
              <label htmlFor="contactName">Contact Person's Name:</label>
              <input
                type="text"
                name="contactName"
                placeholder="Enter contact person's name"
                required
              />
              <label htmlFor="contactEmail">Contact Person's Email:</label>
              <input
                type="email"
                name="contactEmail"
                placeholder="Enter contact person's email"
                required
              />
              <label htmlFor="schoolID">School ID:</label>
              <input
                type="text"
                name="schoolID"
                placeholder="Enter school ID"
                required
              />
              <label htmlFor="establishedYear">Established Year:</label>
              <input
                type="number"
                name="establishedYear"
                placeholder="Enter established year"
                required
              />
              <label htmlFor="enrollmentYear">Enrollment Year:</label>
              <input
                type="number"
                name="enrollmentYear"
                placeholder="Enter enrollment year"
                required
              />
              <label htmlFor="totalStudents">Total Students:</label>
              <input
                type="number"
                name="totalStudents"
                placeholder="Enter total number of students"
                required
              />{" "}
              <label htmlFor="totalStudents">Total Teacher:</label>
              <input
                type="number"
                name="totalTeachers"
                placeholder="Enter total number of students"
                required
              />
              {/* end input filed */}
            </div>
          </div>

          {/* second coloum */}
          <div className="col-md-6 ps-5 text-start">
            <div className="allleftInputs d-flex flex-wrap">
              {/* input field */}
              <label htmlFor="contactPhone">
                Contact Person's Phone Number:
              </label>
              <input
                type="tel"
                name="contactPhone"
                placeholder="Enter contact person's phone number"
                required
              />
              <label htmlFor="schoolType">School Type:</label>
              <select name="schoolType" required>
                <option value="">Select school type</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
                <option value="High School">High School</option>
              </select>
              <label htmlFor="SchoolBord">Bord Type:</label>
              <select name="SchoolBord" required>
                <option value="">Select school type</option>
                <option value="MPBord">MPBord</option>
                <option value="CBSC">CBSC</option>
                <option value="none">None</option>
              </select>
              <label htmlFor="schoolLevel">School Level:</label>
              <select name="schoolLevel" required>
                <option value="">Select school level</option>
                <option value="Elementary">Elementary</option>
                <option value="Middle">Middle</option>
                <option value="High">High</option>
              </select>

              <label htmlFor="libraryAvailability">Library Availability:</label>
              <input
                type="checkbox"
                id="libraryAvailability"
                name="libraryAvailability"
              />
              <label htmlFor="sportsFacilities">Sports Facilities:</label>
              <input
                type="checkbox"
                id="sportsFacilities"
                name="sportsFacilities"
              />
              <label htmlFor="transportationServices">
                Transportation Services:
              </label>
              <input
                type="checkbox"
                id="transportationServices"
                name="transportationServices"
              />

              <label htmlFor="website">Website:</label>
              <input
                type="url"
                id="website"
                name="website"
                placeholder="Enter school website"
              />
              <label htmlFor="socialMediaAccounts">
                Social Media Accounts:
              </label>
              <input
                type="text"
                id="socialMediaAccounts"
                name="socialMediaAccounts"
                placeholder="Enter social media accounts"
              />
              <label htmlFor="schoolLogo">School Logo:</label>
              <input
                type="file"
                id="schoolLogo"
                name="schoolLogo"
                accept="image/*"
              />
              <label htmlFor="schoolLogo">School Images:</label>
              <input
                type="file"
                id="schoolImages"
                name="schoolImages"
                accept="image/*"
              />

              {/* end input field */}
            </div>
            <div className="text-center">
              <button className="btn btn-warning" type="submit">
                Add School
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddSchool;
