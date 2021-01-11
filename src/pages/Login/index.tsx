import {
    IonButton,
    IonContent,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonText,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const login = () => {
        if (email === "agente") {
            history.push("/Agent");
        }
        if (email === "visor") {
            history.push("/Scanner");
        }
    };

    return (
        <IonPage>
            <IonContent>
                <div className='ion-padding'>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <IonImg
                            src='/assets/icon/logo.jpg'
                            style={{ width: 250 }}
                        />
                    </div>
                    <form onSubmit={login}>
                        <IonItem>
                            <IonLabel position='stacked'>Email</IonLabel>
                            <IonInput
                                onInput={(e: any) => {
                                    setEmail(e.target.value);
                                }}
                                type='text'
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel position='stacked'>Contraseña</IonLabel>
                            <IonInput
                                onInput={(e: any) => {
                                    setPassword(e.target.value);
                                }}
                                type='password'
                            />
                        </IonItem>
                        <IonButton
                            expand='block'
                            type='submit'
                            className='ion-margin-top'
                            size='small'
                            color='success'
                            slot='start'
                        >
                            Iniciar sesion
                        </IonButton>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
}
