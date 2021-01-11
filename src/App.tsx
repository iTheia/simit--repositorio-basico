import React from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login";
import Agent from "./pages/Agent";
import Form from "./pages/Form";
import Scanner from "./pages/Scanner";

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path='/' component={Login} exact={true} />
                <Route path='/Agent' component={Agent} />
                <Route path='/Form' component={Form} />
                <Route path='/Scanner' component={Scanner} />
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);

export default App;
