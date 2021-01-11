import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import Table from "../../components/Table";
import { genData } from "../../util";

export default function Scanner() {
    const [data, setData] = useState(genData(40));

    const handleClick = (id: string) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    };
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Visor</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <Table list={data} deleteMode={true} onClic={handleClick} />
            </IonContent>
        </IonPage>
    );
}
