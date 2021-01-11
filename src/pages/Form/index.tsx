import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import Input from "../../components/Input";

export default function Form() {
    const [filas, setFilas] = useState([1]);
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonBackButton defaultHref='/Agent' />
                        </IonButtons>
                        <IonTitle>Formulario</IonTitle>
                    </IonToolbar>
                    <form>
                        <IonItem>
                            <IonLabel position='stacked'>Nombre</IonLabel>
                            <IonInput type='text' />
                        </IonItem>
                        <IonItem>
                            <IonLabel position='stacked'>Edad</IonLabel>
                            <IonInput type='text' />
                        </IonItem>
                        <IonItem>
                            <IonLabel position='stacked'>Domicilio</IonLabel>
                            <IonInput type='text' />
                        </IonItem>

                        <IonItem>
                            <IonLabel position='stacked'>
                                Lubar donde se cometio la infraccion
                            </IonLabel>
                            <IonInput type='text' />
                        </IonItem>

                        <IonItem>
                            <IonLabel position='stacked'>Regerencia</IonLabel>
                            <IonInput type='text' />
                        </IonItem>

                        <IonItem>
                            <IonLabel position='stacked'>Entidad</IonLabel>
                            <IonInput type='text' />
                        </IonItem>

                        <IonItem>
                            <IonLabel position='stacked'>
                                Tipo de identificacion
                            </IonLabel>
                            <IonInput type='text' />
                        </IonItem>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <strong>Infracciones cometidas</strong>
                                </IonCol>
                                <IonCol>
                                    <strong>Fundamento</strong>
                                </IonCol>
                                <IonCol>
                                    <strong>Apartado</strong>
                                </IonCol>
                            </IonRow>
                            {filas.map(() => (
                                <Input />
                            ))}
                        </IonGrid>
                        <IonButton
                            onClick={() => setFilas((prev) => [...prev, 1])}
                        >
                            Agregar fila
                        </IonButton>
                    </form>
                </IonHeader>
            </IonContent>
        </IonPage>
    );
}
