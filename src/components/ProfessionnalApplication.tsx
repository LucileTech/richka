import React from "react";
import { getAssetPath } from "../utils/getAssetPath";

const ProfessionalApplication: React.FC = () => {
  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Professional Application</h1>
        <p>
          To qualify for our Professional Group, you must be an institution,
          licensed aromatherapist, practitioner, massage therapist and/or
          chiropractor and agree to use Richka’s products in your professional
          settings.
        </p>
        <form>
          <input type="text" placeholder="Business Name" required />
          <input type="text" placeholder="Business Address" required />
          <input type="text" placeholder="Street Address" required />
          <div style={{ display: "flex", gap: "1rem" }}>
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Country" required />
          </div>
          <label>
            <input type="checkbox" /> Corporate Address is the same as business
            address
          </label>
          <input type="text" placeholder="Contact Person Name" required />
          <input type="email" placeholder="Contact Person Email" required />
          <input type="tel" placeholder="Contact Person Phone" required />
          <select required>
            <option value="" disabled selected>
              How Did You Hear About Us?
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <select required>
            <option value="" disabled selected>
              What Best Describes Your Business?
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <textarea
            placeholder="Tell Us About Your Company"
            rows={4}
            required
          ></textarea>
          <label>
            Business Permit or Licence
            <input type="file" required />
          </label>
          <label>
            Verification Code
            <input
              type="text"
              placeholder="Enter the text in the box below"
              required
            />
            <img src={getAssetPath("path/to/captcha/image")} alt="Captcha" />
          </label>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ProfessionalApplication;
