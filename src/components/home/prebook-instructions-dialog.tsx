
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Ticket, ClipboardCheck, ExternalLink } from "lucide-react";
import Link from "next/link";

const GOOGLE_FORM_LINK = "https://forms.gle/your-form-link"; // Replace with your actual Google Form link

export function PrebookInstructionsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="mt-6 w-full sm:w-auto shadow-lg hover:shadow-primary/40 transition-all transform hover:scale-105"
        >
          <Ticket className="mr-2 h-5 w-5" /> Reserve Your Spot Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <ClipboardCheck className="h-6 w-6 text-primary" />
            How to Pre-Book Focus AI 3.0
          </DialogTitle>
          <DialogDescription>
            Follow these two simple steps to reserve your early access and special discount.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg flex items-center">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-bold text-sm mr-3">1</span>
              Pay via UPI
            </h3>
            <p className="text-muted-foreground pl-9">
              Pay the pre-booking amount to the UPI ID below.
            </p>
            <div className="pl-9">
                <div className="flex items-center gap-2 p-3 rounded-md bg-muted border">
                    <span className="font-mono text-primary font-bold text-base">iamsirenjeev@oksbi</span>
                </div>
                 <p className="text-xs text-muted-foreground mt-2">
                    Amount: ₹199 for OPTOBHARAT members, ₹499 for others.
                 </p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg flex items-center">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-bold text-sm mr-3">2</span>
              Confirm Your Booking
            </h3>
            <p className="text-muted-foreground pl-9">
              After payment, fill out the Google Form to confirm your spot. You will need to attach a screenshot of your payment.
            </p>
            <div className="pl-9 mt-2">
              <Button asChild>
                <a href={GOOGLE_FORM_LINK} target="_blank" rel="noopener noreferrer">
                  Go to Google Form <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
