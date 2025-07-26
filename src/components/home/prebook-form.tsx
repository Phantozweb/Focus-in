
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Loader2, Send, Star, Ticket } from "lucide-react";
import { useState, useTransition } from "react";
import { handlePrebookSubmission } from "@/app/actions";

const prebookFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50),
  email: z.string().email("Please enter a valid email address."),
  isOptoBharatMember: z.boolean().default(false),
});

type PrebookFormValues = z.infer<typeof prebookFormSchema>;

export function PreBookForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<PrebookFormValues>({
    resolver: zodResolver(prebookFormSchema),
    defaultValues: {
      name: "",
      email: "",
      isOptoBharatMember: false,
    },
  });

  async function onSubmit(data: PrebookFormValues) {
    startTransition(async () => {
      const result = await handlePrebookSubmission(data);
      if (result.success) {
        toast({
          title: "Pre-Booked Successfully!",
          description: "Thank you! We've received your pre-booking and will notify you upon launch.",
        });
        form.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: result.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <Card className="shadow-2xl w-full">
      <CardHeader>
        <CardTitle>Reserve Your Spot</CardTitle>
        <CardDescription>
          Fill the form to pre-book. No payment required today.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isOptoBharatMember"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-primary/5">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="flex items-center gap-1.5 cursor-pointer">
                      <Star className="h-4 w-4 text-yellow-500" />
                      Are you an OPTOBHARAT member?
                    </FormLabel>
                    <FormDescription>
                      Check this box to claim your special discount.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full shadow-lg hover:shadow-primary/40 transition-all transform hover:scale-105" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Ticket className="mr-2 h-4 w-4" />
                  Confirm Pre-Booking
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
