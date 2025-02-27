import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";
import * as AvatarPrimitive from "@rn-primitives/avatar";
import { cn } from "@/lib/utils";

export const AvatarRoot = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-32 w-32 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
AvatarRoot.displayName = "AvatarRoot";
