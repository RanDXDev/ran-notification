<script lang="ts">
  import { notificationStore } from "$store/notifications";
  import { delay, isEnvBrowser } from "$utils/misc";
  import { useNuiEvent } from "$utils/useNuiEvent";
  import { flip } from "svelte/animate";
  import { quadInOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";

  import { type NotifType, type Notification } from "$lib/type";
  import { debugData } from "$utils/debugData";
  async function Clicky() {
    notificationStore.addNotification(
      "Success",
      "This is a success message",
      "success"
    );
    await delay(1000);
    notificationStore.addNotification(
      "Error",
      "This is an error message",
      "error"
    );
    await delay(1000);
    notificationStore.addNotification(
      "Warning",
      "This is a warning message",
      "warning"
    );
    await delay(1000);
    notificationStore.addNotification(
      "Info",
      "This is an info message",
      "info"
    );
  }

  function IsValidType(str) {
    const validTypes: NotifType[] = ["error", "info", "success", "warning"];
    return validTypes.includes(str as NotifType);
  }

  function CheckData(data: Notification) {
    const newdata = { ...data };
    Object.keys(data).forEach((key) => {
      const val = data[key];
      switch (key) {
        case "title":
          if (!val && !data["message"]) newdata["ignore"] = true;
          break;
        case "type":
          if (!val || !IsValidType(val)) newdata[key] = "info";
          break;
      }
    });
    return newdata;
  }
  useNuiEvent("send-notify", function (data: Notification) {
    const newdata = CheckData(data);
    const { type, message, title, timeout } = newdata;
    notificationStore.addNotification(title, message, type, timeout);
  });
</script>

<div class="w-screen h-screen">
  {#if isEnvBrowser()}
    <button on:click={Clicky} class="bg-blue-500 p-2 rounded m-2"
      >TEST NOTIF</button
    >
  {/if}
  <div class="notify-wrapper overflow-hidden">
    {#each $notificationStore as { id, type, message, title } (id)}
      <div
        animate:flip={{ easing: quadInOut, duration: 400 }}
        in:fly={{ x: 200 }}
        out:fade={{ duration: 200 }}
        class="notif-card"
        class:error={type == "error"}
        class:success={type == "success"}
        class:primary={type == "info"}
        class:warning={type == "warning"}
      >
        <div class="flex gap-2">
          <span class="grid place-items-center">
            {#if type == "error"}
              <i
                class="fa-solid fa-triangle-exclamation text-error-600 fa-lg animate-pulse"
              />
            {:else if type == "info"}
              <ion-icon
                name="information-circle"
                class="w-7 h-7 text-primary-400"
              />
            {:else if type == "warning"}
              <i
                class="fa-solid fa-triangle-exclamation fa-lg text-warning-600"
              />
            {:else if type == "success"}
              <i class="fa-solid fa-circle-check fa-lg text-success-400" />
            {/if}
          </span>
          {#if title}
            <h1>{title}</h1>
          {/if}
        </div>
        {#if message}
          <p class="desc">{message}</p>
        {/if}
        <div class="h-full absolute right-0 py-2">
          <div
            class:error={type == "error"}
            class:success={type == "success"}
            class:primary={type == "info"}
            class:warning={type == "warning"}
            class="line w-1 h-full rounded"
          />
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .line.success {
    @apply bg-success-500;
  }
  .line.warning {
    @apply bg-warning-600;
  }
  .line.error {
    @apply bg-error-500;
  }
  .line.primary {
    @apply bg-primary-400;
  }

  .notif-card.warning {
    @apply !shadow-warning-400/30;
  }
  .notif-card.primary {
    @apply !shadow-primary-300/40;
  }
  .notif-card.error {
    @apply !shadow-error-500/30;
  }
  .notif-card.success {
    @apply !shadow-success-300/30;
  }
  .notif-card .desc {
    @apply font-semibold mt-1;
  }
  .notif-card h1 {
    @apply text-xl font-bold;
  }
  .notif-card {
    @apply bg-slate-900 rounded-sm relative;
    @apply shadow-md;
    @apply min-h-[4em] p-2 text-white flex flex-col justify-center;
  }
  .notify-wrapper {
    @apply absolute right-0 bottom-1/2 translate-y-1/2 h-full justify-center px-3 w-96 flex flex-col gap-2 my-5;
  }
</style>
