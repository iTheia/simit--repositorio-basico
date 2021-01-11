import { IonCol, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import React from "react";

export default function Input() {
    return (
        <IonRow>
            <IonCol>
                <IonInput
                    style={{ borderBottom: "2px solid black" }}
                    type='text'
                />
            </IonCol>
            <IonCol>
                <IonInput
                    style={{ borderBottom: "2px solid black" }}
                    type='text'
                />
            </IonCol>
            <IonCol>
                <IonInput
                    style={{ borderBottom: "2px solid black" }}
                    type='text'
                />
            </IonCol>
        </IonRow>
    );
}
