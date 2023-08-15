import { writable } from "svelte/store";
import Pop from "../../assets/pop.wav";
import { enableSound } from "$utils/misc";
import type { NotifType, Notification } from "$lib/type";

function generateRandomId(length: number) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomId += charset.charAt(randomIndex);
  }

  return randomId;
}

function PlayAudio() {
  if (!enableSound) return;
  const audio = new Audio(Pop);
  audio.volume = 0.3;
  audio.play();
  audio.onended = function () {
    audio.remove();
  };
}

export function createNotificationStore() {
  const { subscribe, set, update } = writable<Notification[]>([]);
  function addNotification(
    title: string,
    message: string,
    type: NotifType = "info",
    timeout: number = 5000
  ) {
    const id = generateRandomId(5);
    const notification = { title, message, type, id };
    PlayAudio();
    update((notifications) => [notification, ...notifications]);
    if (timeout > 0) {
      setTimeout(() => {
        update((notifications) => notifications.filter((n) => n.id !== id));
      }, timeout);
    }
  }
  function clearNotification() {
    set([]);
  }
  return {
    subscribe,
    addNotification,
    clearNotification,
  };
}

export const notificationStore = createNotificationStore();
