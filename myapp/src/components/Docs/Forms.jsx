import "./Forms.css";
import { useState } from "react";

function Docs() {
  const [formData, setFormData] = useState({
    working: [],
    education: [],
  });
  const handleChange = (eve) => {
    const { name, type, value, checked, files } = eve.target;
    if (type === "checkbox") {
      if (name === "working") {
        setFormData((prev) => {
          const updatedArray = checked
            ? [...prev.working, value]
            : prev.working.filter((item) => item !== value);
          return { ...prev, working: updatedArray };
        });
      } else if (name === "education") {
        setFormData((prev) => {
          const updatedArray = checked
            ? [...prev.education, value]
            : prev.education.filter((item) => item !== value);
          return { ...prev, education: updatedArray };
        });
      }
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handlSubmit = (eve) => {
    eve.preventDefault();
    console.log("Final Form Data:", formData);
  };


  return (
      <div className="forms">
        <div className="form2">
          <p>Name:</p>
          <input type="text" name="name" onChange={handleChange} />
          <p>Age: {formData.age || 0}</p>
          <input
            type="range"
            name="age"
            min="0"
            max="100"
            onChange={handleChange}
            value={formData.age || 0}
          />
          <p>User Name :</p>
          <input type="email" name="username" onChange={handleChange} />
          <p>Father Name :</p>
          <input type="text" name="fathername" onChange={handleChange} />
          <p>Mother Name :</p>
          <input type="text" name="mothername" onChange={handleChange} />
          <p>Mobile Number :</p>
          <input type="text" name="mobilenumber" onChange={handleChange} />
          <p>Email Address :</p>
          <input type="email" name="Email Address" onChange={handleChange} />
          <p>Gender</p>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          <label>Female</label>
          <p>Address : </p>
          <input type="text" name="address" onChange={handleChange}/>
          {/* <p>Door No :</p>
          <input type="text" name="doorno" onChange={handleChange} />
          <p>Area :</p>
          <input type="text" name="area" onChange={handleChange} />
        </div>
        <div className="form3">
          <p>Street :</p>
          <input type="text" name="street" onChange={handleChange} /> */}
          <p>City :</p>
          <input type="text" name="city" onChange={handleChange} />
          <p>Country :</p>
          <input type="text" name="country" onChange={handleChange} />
          <p>PinCode :</p>
          <input type="text" name="pincode" onChange={handleChange} />
          {/* <p>Occupation :</p>
          <input type="text" name="occupation" onChange={handleChange}/>
          <label>Working</label>
          <input
            type="checkbox"
            name="working"
            value="Working"
            onChange={handleChange}
          />
          <label>Student</label>
          <input
            type="checkbox"
            name="working"
            value="Student"
            onChange={handleChange}
          /> */}
          {/* <p>Education Details :</p>
          <label>College</label>
          <input
            type="checkbox"
            name="education"
            value="College"
            onChange={handleChange}
          /> */}
          {/* <label>School</label>
          <input
            type="checkbox"
            name="education"
            value="School"
            onChange={handleChange}
          /> */}
          <p>College Name:</p>
          <input
            type="text"
            name="college_school_name"
            onChange={handleChange}
          />
          <p>School Name:</p>
          <input type="text" name="School_name" onChange={handleChange}/>
          <p>Passed Out :</p>
          <input type="text" name="passedout" onChange={handleChange} />
          <label>Area of Interest</label>
          <select name="interest" onChange={handleChange}>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
          </select>
          <p>Resume Upload :</p>
          <input type="file" name="resume_upload" onChange={handleChange} />
          <div>
            <button onClick={handlSubmit}>Submit</button>
          </div>
        </div>
      </div>
  );
}
export default Docs;