import toast from "react-hot-toast";
import { endpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { setLoading } from "../../slices/auth";

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints;

export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE", response);
      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP send successfully");
      navigate("/verify-email")
    } catch (error) {
      console.log("Send otp error", error);
      toast.error("Could not send otp");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export const signup = async (
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      });

      console.log("SIGNUP API RESPONSE", response);

      if(!response.data.success){
        throw new Error(response.data.message);
      }
      toast.success("Signup successfully");
      dispatch(setLoading(false));
      toast.dismiss(toastId);
      return navigate("/login");
    } catch (error) {
      console.log("ERROR while signup", error);
    }
  };
};
