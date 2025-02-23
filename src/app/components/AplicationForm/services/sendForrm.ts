interface FormState {
    name: string;
    phoneNumber: string;
  }
  
  const sendForm = (prevState: FormState, formData: FormData): FormState => {
    const dataToSend: FormState = {
      name: formData.get("name") as string,
      phoneNumber: formData.get("user_phone") as string, 
    };
  
    console.log("formData", dataToSend);
  
    return dataToSend;
  };
  
  export default sendForm;
  