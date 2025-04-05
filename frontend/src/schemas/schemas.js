import * as yup from "yup";

//The signup schema
export const signupSchema = yup.object().shape({
    username:yup.string().required("Your full name is required"),
    email:yup.string().email("You entered an invalid email").required("Your email is required"),
    country:yup.string().required("Your country is required"),
    password:yup.string().required("Your password is required")
});


//The login schema
export const LoginSchema = yup.object().shape({
    username:yup.string().required("Your full name is required"),
    email:yup.string().email("You entered an invalid email").required("Your email is required"),
    password:yup.string().required("Your password is required")
});

//The community schema
export const communitySchema = yup.object().shape({
    name:yup.string().required("The community name is required"),
    privacy:yup.string().required("The community privacy is required"),
    description:yup.string().required("The communirty description is required")
});