import { simulateFollowing } from "@/actions/actions";
import { Button } from "../ui/button";

export function FollowButton() {
    return(
        <form action={simulateFollowing}>
            <Button type="submit">Simulate Follow Notification</Button>
        </form>
    )
}