import { useState, useEffect } from "react"
import { createFastboard, FastboardApp, Fastboard } from "@netless/fastboard-react";
import "./App.css";

function App() {
    const [app, setApp] = useState<FastboardApp | null>(null);

    useEffect(() => {
        // hold the app instance in the closure.
        // you can not rely on the outer "app" because this callback is only called once.
        let appInstance: FastboardApp;
    
        createFastboard({
            sdkConfig: {
                appIdentifier: "whiteboard-appid",
                region: "cn-hz", // "cn-hz" | "us-sv" | "sg" | "in-mum" | "gb-lon"
            },
            joinRoom: {
                uid: "unique_id_for_each_client",
                uuid: "room-uuid",
                roomToken: "NETLESSROOM_...",
            },
        }).then(app => {
            // save the app instance to outer "app", also hold it by itself
            setApp((appInstance = app));
        });
    
        // terminate the app on component unmount
        return () => {
            if (appInstance) appInstance.destroy();
        };
    
        // must be called only once
    }, []);

    return (
        <div className="container">
            <Fastboard app={app} language="zh-CN" theme="light" />
        </div>
    )
}

export default App;
