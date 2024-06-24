import React from "react";

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
        <form id="pro-form">
          <input
            id="pro-form-name"
            type="text"
            placeholder="Business Name"
            required
          />
          <input
            id="pro-form-address"
            type="text"
            placeholder="Business Address"
            required
          />
          <input
            id="pro-form-street"
            type="text"
            placeholder="Street Address"
            required
          />
          <div style={{ display: "flex", gap: "1rem" }}>
            <input id="pro-form-city" type="text" placeholder="City" required />
            <input
              id="pro-form-country"
              type="text"
              placeholder="Country"
              required
            />
          </div>
          <label>
            <input id="pro-form-checkbox" type="checkbox" /> Corporate Address
            is the same as business address
          </label>
          <input
            id="pro-form-contact"
            type="text"
            placeholder="Contact Person Name"
            required
          />
          <input
            id="pro-form-mail"
            type="email"
            placeholder="Contact Person Email"
            required
          />
          <input
            id="pro-form-phone"
            type="tel"
            placeholder="Contact Person Phone"
            required
          />
          <select required>
            <option value="" disabled selected>
              How Did You Hear About Us?
            </option>
            <option value="option1">Website</option>
            <option value="option2">Friend</option>
            <option value="option3">Social Media</option>
          </select>
          <select required>
            <option value="" disabled selected>
              What Best Describes Your Business?
            </option>
            <option value="option1">Independant</option>
            <option value="option2">Corporation</option>
          </select>
          <textarea
            placeholder="Tell Us About Your Company"
            rows={4}
            required
          ></textarea>
          <label>
            Business Permit or Licence
            <input id="pro-form-licence" type="file" required />
          </label>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ProfessionalApplication;
