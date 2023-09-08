import { useFastboard, Fastboard } from "@netless/fastboard-react";
import "./App.css";

function App() {
    const app = useFastboard(() => ({
        sdkConfig: {
            appIdentifier: "whiteboard-appid",
            region: "cn-hz", // "cn-hz" | "us-sv" | "sg" | "in-mum" | "gb-lon"
        },
        joinRoom: {
            uid: "unique_id_for_each_client",
            uuid: "room-uuid",
            roomToken: "NETLESSROOM_...",
        },
    }));

    return (
        <div className="container">
            <Fastboard app={app} language="zh-CN" theme="light" />
        </div>
    )
}

export default App;
