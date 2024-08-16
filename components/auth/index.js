
export const INITIAL_FORM_STATE = {
    Email: "",
    Password: "",
    Name: "",
    Phone: "",
  };

export const screenHandler = (flag) => {
    return flag;
  };

 export  const uiTextHandler = (authIdentifier) => {
    return authIdentifier  ? 'Sign Up' : 'Login'
  }

export const validateForm = (formData, isLogin) => {
    const { Email, Password, Name, Phone } = formData;
    if (!Email) return "Email is required";
    if (!Password) return "Password is required";
    if (!isLogin) {
    if (!Name) return "Name is required";
    if (!Phone) return "Phone number is required";
    }
    return null;
  };