import { IonContent, IonButton, IonAvatar, IonPage, IonItem, IonLabel, IonCheckbox, IonTitle, IonToolbar, IonIcon, IonInput, IonText, IonRouterLink } from '@ionic/react';
import { useState } from 'react';
import './Home.css';
import { useHistory } from 'react-router';
import { Field, useFormik, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { Link } from 'react-router-dom';


const LogIn: React.FC = (props) => {


  const history = useHistory();
  const validationSchema = yup.object({
    email: yup
      .string()
      .nullable()
      .email("Enter a valid email")
      .required("Email is required"),

    password: yup
      .string()
      .nullable()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const [data, setData] = useState('')

  return (


    <IonPage style={{ flexDirection: 'column', justifyContent: "center" }} >

      <IonAvatar style={{ alignSelf: 'center', width: 150, height: 150 }} >
        <img src="https://api.lorem.space/image/fashion?w=150&h=150" />
      </IonAvatar>


      <IonText style={{ fontWeight: "bold", fontSize: 25, alignSelf: 'center' }}>LogIn</IonText>
      <IonText style={{ color: 'grey', fontSize: 15, alignSelf: 'center' }}>Please sign in to continue</IonText>

      <Formik
        initialValues={{
          email: null,
          password: null,

        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log("Entered values", JSON.stringify(values, null, 2));

        }}
      >
        {formikProps => (
          <div>
            <form onSubmit={formikProps.handleSubmit} className="ion-padding">

              <IonItem>
                <IonLabel position="floating">Email</IonLabel>

                <IonInput
                  autofocus={true}
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
                <IonLabel position="floating">Password</IonLabel>

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

              <IonRouterLink

              >
                <IonButton
                  class="ion-text-center"
                  onClick={(e) => {
                    history.push("/home");

                  }}
                  className="ion-margin-top"
                  type="submit"
                  expand="block"
                >
                  Sign In
                </IonButton>
              </IonRouterLink>
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





      <IonText style={{ color: 'grey', fontSize: 15, alignSelf: 'center', margin: 10 }}> <a style={{ textDecoration: "none" }} target="_parent" href="/forgotpasword">Forgot Password ?</a>  </IonText>

      <IonText style={{ color: 'grey', fontSize: 15, alignSelf: 'center' }}>Don't have an account ? <a style={{ textDecoration: "none" }} target="_parent" href="/signup">Sign up</a>  </IonText>
    </IonPage>
  );
};



export default LogIn;
