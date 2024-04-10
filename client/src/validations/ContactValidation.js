const ContactValidation = (values) => {
    const errors = {};

    const phone_pattern = /^\d+-?\d*$/;

    if (!values.name) {
        errors.name = "Name is required";
    } else if (values.name.length > 30) {
        errors.name = "Name must not exceed 30 characters";
    }

    if (!values.phone) {
        errors.phone = "Phone number is required";
    } else if (!phone_pattern.test(values.phone)) {
        errors.phone = "Phone number can only contain numbers and an internal dash";
    }

    if (!values.title) {
        errors.title = "Title is required";
    }
    return errors;
};

export default ContactValidation;


// const ContactValidation = (values) => {
//     const errors = {};

//     const phone_pattern = /^\d+-?\d*$/;

//     if (!values.name) {
//         errors.name = "Name is required";
//     }
//     else if (values.name.length > 30) {
//         errors.name = "Name must not exceed 30 characters";
//     }

//     if (!values.phone) {
//         errors.phone = "Phone number is required";
//     }
//     else if (!phone_pattern.test(values.phone)) {
//         errors.phone = "Phone number can only contain numbers and an internal dash";
//     }

//     if (!values.title) {
//         errors.title = "Title is required";
//     }
//     return errors;
// };
// export default ContactValidation;