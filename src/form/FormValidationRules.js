const validationRules = ({ firstName, lastName, address, destination }) => {
    const errors = {};
  
    if (!firstName.value) {
      errors.firstName = "First name is required";
    }
    if (!lastName.value) {
      errors.lastName = "Last name is required";
    }
  
    if (!address.value) {
      errors.address = "Address is required";
    }

    if (!destination.value) {
        errors.destination = "A destination of interest is required.";
    }
  
    return errors;
  };
  
  export default validationRules;