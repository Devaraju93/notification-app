import { simulateFollowing } from "@/actions/actions";
import { Button } from "../ui/button";

export function FollowButton() {
    return(
        <form action={simulateFollowing}>
            <Button type="submit" className="cursor-pointer">Simulate Follow Notification</Button>
        </form>
    )
}