import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import React from "react";
import Table from "../../components/Table";
import { genData } from "../../util";

export default function Agent() {
    const data = genData(30);
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Agente 045</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton
                                routerLink='/Form'
                                style={{ marginTop: 15, marginBottom: 15 }}
                            >
                                Nueva infraccion
                            </IonButton>
                            <Table list={data} />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}
