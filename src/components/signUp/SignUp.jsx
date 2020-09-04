import React from 'react';
import { useFormik } from 'formik';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { signUpUser, createUser } from '../../firebase/firebase.utils';
import './SignUp.scss';

function SignUp() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) errors.email = 'required';
            if (!values.name) errors.name = 'required';
            if (!values.password) errors.password = 'required';
            if (values.password !== values.confirmPassword)
                errors.confirmPassword = 'passwords must match';
            if (!values.confirmPassword) errors.confirmPassword = 'required';

            return errors;
        },
        onSubmit: async (values) => {
            console.log(values);

            try {
                const { user } = await signUpUser(
                    values.email,
                    values.password
                );
                await createUser(user, { displayName: values.name });
                formik.handleReset();
            } catch (error) {
                console.error(error);
            }
        },
    });
    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your eamil and password</span>
            <form onSubmit={formik.handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    handleChange={formik.handleChange}
                    label="email"
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />

                <ErrorMessage name="email" formik={formik} />
                <FormInput
                    type="text"
                    name="name"
                    handleChange={formik.handleChange}
                    label="name"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                />
                <ErrorMessage name="name" formik={formik} />

                <FormInput
                    type="password"
                    name="password"
                    handleChange={formik.handleChange}
                    label="password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                />
                <ErrorMessage name="password" formik={formik} />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    handleChange={formik.handleChange}
                    label="confirmPassword"
                    value={formik.values.confirmPassword}
                    onBlur={formik.handleBlur}
                />
                <ErrorMessage name="confirmPassword" formik={formik} />

                <CustomButton type="submit">submit</CustomButton>
            </form>
        </div>
    );
}

export default SignUp;
