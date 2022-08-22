import { IonContent, IonButton, IonAvatar, IonPage, IonItem, IonLabel, IonSelectOption, IonTitle, IonToolbar, IonIcon, IonInput, IonText, IonFooter } from '@ionic/react';
import { useState } from 'react';
import { Field, useFormik, ErrorMessage, Formik } from "formik";
import * as yup from "yup";

const SignUp: React.FC = () => {



    const validationSchema = yup.object({
        email: yup
            .string()
            .nullable()
            .email("Enter a valid email")
            .required("Email is required"),
        name: yup
            .string()
            .nullable()
            .min(8, "Name should be of minimum 8 characters length")
            .required("Name is required"),



        password: yup
            .string()
            .nullable()
            .min(8, "Password should be of minimum 8 characters length")
            .required("Password is required"),
    });

    return (
        <IonPage  style = {{flexDirection:'column', justifyContent: "center"}} >
            <IonAvatar style={{ alignSelf: 'center', width: 150, height: 150 }} >
                <img src="https://api.lorem.space/image/fashion?w=150&h=150" />
            </IonAvatar>

            <IonText style={{ fontWeight: "bold", fontSize: 25, alignSelf: 'center' }}>
                Profile</IonText>

            <IonText style={{ fontSize: 14, alignSelf: 'center', color: "grey" }}>
                Edit your details</IonText>

            <Formik
                initialValues={{
                    email: null,
                    name: null,
                    password: null,

                }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {formikProps => (
                    <div>
                        <form onSubmit={formikProps.handleSubmit} className="ion-padding">
                            <IonItem>
                                <IonLabel position="floating">Name</IonLabel>

                                <IonInput
                                    type="text"
                                    name="name"
                                    value={formikProps.values.name}
                                    onIonChange={formikProps.handleChange}
                                />
                            </IonItem>
                            <p className="error" style={{ color: "red", paddingLeft: 16, marginTop: 4, fontSize: 13, fontStyle: 'italic' }}>
                                {formikProps.touched.name && formikProps.errors.name}
                            </p>
                            <IonItem>
                                <IonLabel position="floating">Email Address </IonLabel>

                                <IonInput

                                    type="email"
                                    name="email"
                                    value={formikProps.values.email}
                                    onIonChange={formikProps.handleChange}
                                />
                            </IonItem>
                            <p className="error" style={{ color: "red", paddingLeft: 16, marginTop: 4, fontSize: 13, fontStyle: 'italic' }}>
                                {formikProps.touched.email && formikProps.errors.email}
                            </p>
                            <IonItem>
                                <IonLabel position="floating">Username </IonLabel>

                                <IonInput

                                    type="password"
                                    name="password"
                                    value={formikProps.values.password}
                                    onIonChange={formikProps.handleChange}
                                />
                            </IonItem>
                            <p className="error" style={{ color: "red", paddingLeft: 16, marginTop: 4, fontSize: 13, fontStyle: 'italic' }}>
                                {formikProps.touched.password && formikProps.errors.password}
                            </p>

                            <IonItem>
                                <IonLabel position="floating">Birth Date</IonLabel>

                                <IonInput
                                    type="text"
                                    name="name"
                                    value={formikProps.values.name}
                                    onIonChange={formikProps.handleChange}
                                />
                            </IonItem>
                            <p className="error" style={{ color: "red", paddingLeft: 16, marginTop: 4, fontSize: 13, fontStyle: 'italic' }}>
                                {formikProps.touched.name && formikProps.errors.name}
                            </p>

                            <IonItem>
                                <IonLabel position="floating">Password</IonLabel>

                                <IonInput
                                    type="text"
                                    name="name"
                                    value={formikProps.values.name}
                                    onIonChange={formikProps.handleChange}
                                />
                            </IonItem>
                            <p className="error" style={{ color: "red", paddingLeft: 16, marginTop: 4, fontSize: 13, fontStyle: 'italic' }}>
                                {formikProps.touched.name && formikProps.errors.name}
                            </p>

                            <IonButton
                                className="ion-margin-top"
                                type="submit"
                                expand="block"
                            >
                                Update
                            </IonButton>
                        </form>

                        {/* <div style={{ fontSize: "smaller" }}>
                            <p>VALUES</p>
                            <pre>{JSON.stringify(formikProps.values, null, 2)}</pre>

                            <p>ERRORS</p>
                            <pre>{JSON.stringify(formikProps.errors, null, 2)} </pre>
                        </div> */}


                    </div>
                )}
            </Formik>
            {/* <IonText style={{ color: 'grey', fontSize: 15, alignSelf: 'center' }}></IonText>
            <IonText style={{ color: 'grey', fontSize: 15, alignSelf: 'center' }}> Already have an account ?
                <a style={{ textDecoration: "none" }} target="_parent" href="/login">Sign In</a>  </IonText> */}

        </IonPage >
    );
};



export default SignUp;
