import { simulateLike } from "@/actions/actions";
import { Button } from "../ui/button";

export default function LikeButton() {
    return(
        <form action={simulateLike}>
            <Button type="submit" className="cursor-pointer">Simulate Like Notification</Button>
        </form>
    )
}


