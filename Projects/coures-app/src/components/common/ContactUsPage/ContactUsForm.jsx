import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { apiConnector } from "../../../services/apiconnector";
// import { contactusEndpoint } from "../../../services/apis";
import CountryCode from "../../../data/countrycode.json";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("data", data);
    try {
      setLoading(true);
      // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API);

      console.log("Response data message", "OK");
      setLoading(false);
    } catch (error) {
      console.log("error while submit contact us message", error);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        countrycode: "",
        phoneno: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)} className="w-[30%]">
      <div className="flex gap-3 mt-10">
        <div className="flex flex-col">
          <label htmlFor="firstname">First Name</label>
          <input
            className="text-black"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter you first name"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && <span>Please enter your first name</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname">last Name</label>
          <input
            className="text-black"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter you last name"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && <span>Please enter your last name</span>}
        </div>
      </div>
      {/* email */}
      <div className="flex flex-col max-w-maxContent">
        <label htmlFor="email">last Name</label>
        <input
          className="text-black"
          type="email"
          name="email"
          id="email"
          placeholder="Enter you email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Please enter your email</span>}
      </div>
      {/* phone number  */}
      <div className="flex flex-col ">
        <label htmlFor="phoneno">Phone Number</label>
        <div className="flex justify-between gap-3">
          <select 
            name="dropdown"
            className="w-[20%] bg-yellow-50"
            id="dropdown"
            {...register("countrycode", { required: true })}
          >
            {CountryCode.map((el, i) => (
              <option key={i} value={el.code} className="text-black">
                {el.code} - {el.country}
              </option>
            ))}
          </select>
          <div className="flex flex-col">
            <input
              className="text-black w-full"
              type="text"
              name="phoneno"
              id="phoneno"
              placeholder="Enter you phoneno"
              {...register("phoneno", {
                required: { value: true, message: "Please fill field" },
                maxLength: { value: 10, message: "invalid phone number" },
                minLength: { value: 10, message: "invalid phone number" },
              })}
            />
            {errors.phoneno && <span>Please enter your phoneno</span>}
          </div>
        </div>
      </div>

      {/* message  */}
      <div>
        <label htmlFor="message">Message*</label>
        <textarea
          className="text-black"
          name="message"
          id="message"
          cols={48}
          rows={7}
          placeholder="Eneter your message here message"
          {...register("message", { required: true })}
        />
        {errors.message && <span>Please eneter you message</span>}
      </div>
      <button type="submit">Submit message</button>
    </form>
  );
};

export default ContactUsForm;
