

const sendForm = (prevState: any, formData: FormData) => {
    const dataToSend = {
      name: formData.get("name") as string,
      phoneNumber: formData.get("phoneNumber") as string, 
    };
  
    console.log("formData", dataToSend);
    
    return dataToSend; 
  };
  
  export default sendForm;
  