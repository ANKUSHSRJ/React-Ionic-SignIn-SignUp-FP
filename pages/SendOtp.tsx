import { IonContent, IonButton, IonAvatar, IonPage, IonItem, IonLabel, IonCheckbox, IonTitle, IonToolbar, IonIcon, IonInput, IonText } from '@ionic/react';
import { useState } from 'react';
import './Home.css';
import { useIonRouter } from "@ionic/react";
import { useHistory } from 'react-router';
import { Field, useFormik, ErrorMessage, Formik } from "formik";
import * as yup from "yup";

const SendOtp: React.FC = () => {


  const history = useHistory();
  const validationSchema = yup.object({


    otp: yup
      .string()
      .nullable()
      .min(8, "otp should be of minimum 6 characters length")
      .required("otp is required"),
  });



  return (
    <IonPage style = {{flexDirection:'column', justifyContent: "center"}} >

      <IonAvatar style={{ alignSelf: 'center', width: 150, height: 150 }} >
        <img src="https://api.lorem.space/image/fashion?w=150&h=150" />
      </IonAvatar>


      <IonText style={{ fontWeight: "bold", fontSize: 25, alignSelf: 'center', margin:20 }}>Forgot Password</IonText>
      <IonText style={{ color: 'green', fontSize: 15, alignSelf: 'center' }}>
      Please enter your verification code.
      </IonText>
      <IonText style={{ color: 'green', fontSize: 12, alignSelf: 'center' }}>
      We have sent a verification code to your registered email ID.
      </IonText>

      <Formik
        initialValues={{
            otp: null,
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
                <IonLabel position="floating">OTP</IonLabel>

                <IonInput
                // autofocus={true}
                   type="password"
                  name="otp"
                  value={formikProps.values.otp}
                  onIonChange={formikProps.handleChange}
                />
              </IonItem>
              <p className="error" style={{ color: "red", paddingLeft: 16, marginTop: 4, fontSize: 13, fontStyle: 'italic' }}>
                {formikProps.touched.otp && formikProps.errors.otp}
              </p>



              <IonButton
                class="ion-text-center"
                onClick={(e) => {
                  history.push("/changepassword");
                }}
                className="ion-margin-top"
                type="submit"
                expand="block"
              >
                Send OTP
              </IonButton>
            </form>
            {/*
            <div style={{ fontSize: "smaller" }}>
              <p>VALUES</p>
              <pre>{JSON.stringify(formikProps.values, null, 2)}</pre>

              <p>ERRORS</p>
              <pre>{JSON.stringify(formikProps.errors, null, 2)} </pre>
            </div> */}


          </div>
        )}
      </Formik>
      <form className="ion-padding"  >



      </form>


         </IonPage>
  );
};



export default SendOtp;
