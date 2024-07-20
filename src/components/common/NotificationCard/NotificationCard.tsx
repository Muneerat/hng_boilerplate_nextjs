import { BellRing } from "lucide-react";
import { FC } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";
import { cn } from "~/lib/utils";
import CustomButton from "../Button/button";

// const preview = [
//   { header: "Your call has been confirmed", time: "1 hour ago" },
//   { header: "Your have a new message!", time: "1 hour ago" },
//   { header: "Your subscription is expiring soon", time: "2 hours ago" },
// ];

interface NotificationPreview {
  header: string;
  time: string;
}

interface CardProperties extends React.ComponentProps<typeof Card> {
  notificationsPreview: NotificationPreview[];
  unreadCount: number;
}

// NotificationCard should always recieve a notificationsPreview array of objects and the unreadCount prop
const NotificationCard: FC<CardProperties> = ({
  className,
  notificationsPreview = [],
  unreadCount = notificationsPreview.length,
  ...properties
}) => {
  return (
    <Card
      data-testid="cardContainer"
      className={cn("h-fit w-fit sm:w-[380px]", className)}
      {...properties}
    >
      <CardHeader className="px-4 sm:p-6">
        <CardTitle>Notifications</CardTitle>
        <CardDescription data-testid="unreadMessageCount">
          You have {unreadCount === 0 ? 0 : unreadCount} unread message
          {unreadCount === 1 ? "" : "s"}.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 p-4 pt-0 sm:p-6 sm:pt-0">
        <div className="flex items-center space-x-4 rounded-md border p-2 sm:p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div data-testid="previewBody">
          {notificationsPreview.map((preview, index) => (
            <div
              key={index}
              className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 sm:mb-4"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p
                  data-testid={`previewHeader${index}`}
                  className="text-sm font-medium leading-none"
                >
                  {preview.header}
                </p>
                <p
                  data-testid={`previewTime${index}`}
                  className="text-sm text-muted-foreground"
                >
                  {preview.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-4 sm:px-6">
        <div className="item-center flex w-full">
          <CustomButton
            variant="primary"
            isDisabled={unreadCount === 0}
            className="w-full"
          >
            Mark all as read
          </CustomButton>
        </div>
      </CardFooter>
    </Card>
  );
};

// bg-[#F97316]

export default NotificationCard;
