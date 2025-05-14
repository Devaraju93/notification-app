"use client";
import { CommentButton } from "@/components/simulation-buttons/comment-button";
import { FollowButton } from "@/components/simulation-buttons/follow-button";
import LikeButton from "@/components/simulation-buttons/like-button";
import { pusherClient } from "@/lib/pusher-utils";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  useEffect(() => {
  
    const channel = pusherClient.subscribe("notifications");

    channel.bind("new-notification", (data: { message: string }) => {
      console.log("Received notification:", data.message);

      
      toast.success(data.message);
    });

    
    return () => {
      channel.unbind("new-notification");
      pusherClient.unsubscribe("notifications");
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full flex flex-col items-center gap-y-6">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <p className="text-center text-gray-600">
          From here you can simulate sending different notifications
        </p>

        <div className="flex flex-col gap-4 w-full items-center">
          <FollowButton />
          <CommentButton />
          <LikeButton />
        </div>

        <Link
          href="/notifications"
          className="text-blue-600 hover:underline mt-4"
        >
          View Notifications
        </Link>
      </div>
    </div>
  );
}
