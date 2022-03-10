<script setup lang="ts">
import { ref, onMounted } from "vue";
import { createFastboard, mount } from "@netless/fastboard";

const container = ref(null);

async function mountFastboard(div: HTMLDivElement) {
  const app = await createFastboard({
    // [1]
    sdkConfig: {
      appIdentifier: "whiteboard-appid",
      region: "cn-hz", // "cn-hz" | "us-sv" | "sg" | "in-mum" | "gb-lon"
    },
    // [2]
    joinRoom: {
      uid: "unique_id_for_each_client",
      uuid: "room-uuid",
      roomToken:
        "NETLESSROOM_...",
    },
    // [3]
    managerConfig: {
      cursor: true,
    },
  });
  return mount(app, div, {});
}

onMounted(() => {
  if (container.value) {
    mountFastboard(container.value);
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
