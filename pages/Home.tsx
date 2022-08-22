import { IonAvatar, IonPage, IonText } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useHistory } from 'react-router';


const ChangePassword: React.FC = (state) => {

    const history = useHistory();


    return (
        <IonPage style={{ flexDirection: 'column', justifyContent: "center" }} >

            <IonAvatar style={{ alignSelf: 'center', }} >
                <img src="https://api.lorem.space/image/pizza?w=150&h=150" />
            </IonAvatar>


            <IonText style={{ fontWeight: "bold", fontSize: 25, alignSelf: 'center', margin: 10 }}>Welcome </IonText>
            <IonText style={{ color: 'green', fontSize: 15, alignSelf: 'center' }}>
                Home Sweet Home
            </IonText>





        </IonPage>
    );
};



export default ChangePassword;
