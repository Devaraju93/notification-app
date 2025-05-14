import { getNotifications } from "@/actions/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bell, Clock } from "lucide-react"
import Link from "next/link"

export default async function Page() {
  const notifications = await getNotifications()

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 w-full">
  <div className="flex items-center gap-2">
    <Bell className="h-6 w-6 text-primary" />
    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Notifications</h1>
  </div>

  <Link href="/">
    <Button  className="bg-red-500 text-white hover:bg-red-600 w-full sm:w-auto text-center cursor-pointer">
      Go back
    </Button>
  </Link>
</div>

      <p className="text-muted-foreground mb-8">Stay updated with your latest notifications and activity</p>

      {notifications?.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground">You have no notifications at this time</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {notifications?.map((notification) => (
            <Card key={notification.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-between items-start gap-4">
                  <p className="text-base font-medium">{notification.message}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                    <Clock className="h-3 w-3" />
                    <time dateTime={new Date(notification.createdAt).toISOString()}>
                      {new Date(notification.createdAt).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </time>
                  </div>
                </div>
              </CardContent>
              <div className="h-1 w-full bg-gradient-to-r from-primary/80 to-primary"></div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
