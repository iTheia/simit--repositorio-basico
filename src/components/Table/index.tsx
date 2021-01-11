import { IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import React from "react";
import { Item } from "../../const";

interface Props {
    list: Item[];
    deleteMode?: boolean;
    onClic?: (index: string) => void;
}

export default function Table({ list, deleteMode, onClic }: Props) {
    return (
        <IonGrid>
            <IonRow style={{ backgroundColor: "#f2f2f2" }}>
                <IonCol>
                    <strong>Folio</strong>
                </IonCol>
                <IonCol>
                    <strong>Estado</strong>
                </IonCol>
                <IonCol>
                    <strong>Fecha</strong>
                </IonCol>
                {deleteMode ? (
                    <IonCol>
                        <strong>Eliminar</strong>
                    </IonCol>
                ) : null}
            </IonRow>
            {list.map(({ estado, fecha, folio, id }) => (
                <IonRow key={id}>
                    <IonCol>{folio}</IonCol>
                    <IonCol>{estado ? "activo" : "pagada"}</IonCol>
                    <IonCol>{fecha}</IonCol>
                    {deleteMode ? (
                        <IonCol
                            onClick={() => {
                                // @ts-ignore
                                onClic(id);
                            }}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <IonIcon name='close'></IonIcon>
                        </IonCol>
                    ) : null}
                </IonRow>
            ))}
        </IonGrid>
    );
}
