import { createFastboard, FastboardApp, mount } from "@netless/fastboard";
import "./style.css"

let app: FastboardApp;
async function mountFastboard(div: HTMLDivElement) {
    app = await createFastboard({
        // [1]
        sdkConfig: {
            appIdentifier: "whiteboard-appid",
            region: "cn-hz", // "cn-hz" | "us-sv" | "sg" | "in-mum" | "gb-lon"
        },
        // [2]
        joinRoom: {
            uid: "unique_id_for_each_client",
            uuid: "room-uuid",
            roomToken: "NETLESSROOM_...",
        },
        // [3]
        managerConfig: {
            cursor: true,
        },
    });
    return mount(app, div);
}

mountFastboard(document.querySelector<HTMLDivElement>('#app')!).then(ui => {
    // Update app
    // ui.update({ theme: "dark" });

    // Terminate app
    // ui.destroy(); // close the ui
    // app.destroy(); // disconnect the whiteboard
});
