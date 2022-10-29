import { useState } from "react";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("INPUT_PHONE_NUMBER");
  const [result, setResult] = useState("");

  const signin = () => {
    if (phoneNumber === "") return;

    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      },
      auth
    );

    const verify = window.recaptchaVerifier;
    const vnPhoneNumber = `+84 ${phoneNumber}`;
    signInWithPhoneNumber(auth, vnPhoneNumber, verify)
      .then((result) => {
        setResult(result);
        setStep("VERIFY_OTP");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const ValidateOtp = () => {
    if (otp === null) return;

    result
      .confirm(otp)
      .then((result) => {
        setStep("VERIFY_SUCCESS");
      })
      .catch((err) => {
        alert("Incorrect code");
      });
  };

  return (
    <div style={{ marginTop: 100 }}>
      <center>
        {step === "INPUT_PHONE_NUMBER" && (
          <div>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="phone number"
            />
            <br />
            <br />
            <div id="recaptcha-container"></div>
            <button onClick={signin}>Send OTP</button>
          </div>
        )}

        {step === "VERIFY_OTP" && (
          <div>
            <input
              type="text"
              placeholder={"Enter your OTP"}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
            <br />
            <br />
            <button onClick={ValidateOtp}>Verify</button>
          </div>
        )}

        {step === "VERIFY_SUCCESS" && <h3>Verify success</h3>}

        {step === "VERIFY_FAIL" && <h3>Verify Fail</h3>}
      </center>
    </div>
  );
}

export default App;
