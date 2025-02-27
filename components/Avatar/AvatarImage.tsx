import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";
import * as AvatarPrimitive from "@rn-primitives/avatar";
import { cn } from "@/lib/utils";

export const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full self-center", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
