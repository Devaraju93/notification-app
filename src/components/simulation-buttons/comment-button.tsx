import { simulateComment } from "@/actions/actions";
import { Button } from "../ui/button";

export function CommentButton() {
    return(
        <form action={simulateComment}>
            <Button type="submit">Simulate Comment Notification</Button>
        </form>
    )
}