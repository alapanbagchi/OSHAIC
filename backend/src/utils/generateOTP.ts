//Function to generate a 6 digit OTP
export const generateOTP = () => {
    return Math.floor(Math.random() * 1000000);
}
 