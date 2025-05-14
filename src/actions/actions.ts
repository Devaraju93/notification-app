"use server";

import { prisma } from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher-utils";

export async function simulateFollowing() {
  try {
    await prisma.notification.create({
      data: {
        message: "You have a new follow request",
      },
    });

    pusherServer.trigger("notifications", "new-notification", {
      message: "You have a new follow request",
    });
    console.log("Notification sent");
  } catch (e) {
    console.log(e);
  }
}

export async function simulateComment() {
  try {
    await prisma.notification.create({
      data: {
        message: "You have a new comment",
      },
    });

    pusherServer.trigger("notifications", "new-notification", {
      message: "You have a new comment",
    });
    console.log("Notification sent");
  } catch (e) {
    console.log(e);
  }
}
export async function simulateLike() {
  try {
    await prisma.notification.create({
      data: {
        message: "You have a new Like",
      },
    });

    pusherServer.trigger("notifications", "new-notification", {
      message: "You have a new Like",
    });
    console.log("Notification sent");
  } catch (e) {
    console.log(e);
  }
}

export async function getNotifications() {
  try {
    const notifications = await prisma.notification.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return notifications;
  } catch (e) {
    console.log(e);
  }
}
