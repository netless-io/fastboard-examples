<script setup lang="ts">
import { ref, onMounted, onUnmounted, shallowRef } from "vue";
import { createFastboard, FastboardApp, mount } from "@netless/fastboard";

const container = ref<HTMLDivElement>();

// app not plain object, don't put it in ref()
const appRef = shallowRef<FastboardApp | null>(null);

onMounted(async () => {
    let app = await createFastboard({
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

    appRef.value = app;

    if (container.value) {
        const ui = mount(app, container.value, {});
        ui.update({ theme: "dark" });

        app.insertCodeEditor(); // insert code editor to board;
    }
});

onUnmounted(() => {
    if (appRef.value) {
        appRef.value.destroy();
    }
});
</script>

<template>
  <div className="container" ref="container"></div>
</template>

<style>
.container {
  width: 80vw;
  height: 80vh;
}
</style>
