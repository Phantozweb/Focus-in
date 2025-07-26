
'use server';

import { z } from 'zod';

const prebookFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  isOptoBharatMember: z.boolean(),
});

export async function handlePrebookSubmission(formData: z.infer<typeof prebookFormSchema>) {
  const validatedData = prebookFormSchema.safeParse(formData);

  if (!validatedData.success) {
    return { success: false, error: "Invalid data provided." };
  }
  
  // WARNING: This webhook URL is for local development and will not work in production.
  // Replace with a production-ready webhook URL from a service like Zapier, Make.com, or your own API endpoint.
  const webhookUrl = 'http://localhost:5678/webhook/7dddcd4f-1229-461c-a52f-df135f29fd4b/webhook/a662ebc1-67bb-4e7f-a36d-1275c0099df2';

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData.data),
    });

    if (!response.ok) {
        // Attempt to read the error response from the webhook
        const errorBody = await response.text();
        console.error('Webhook response error:', response.status, errorBody);
        return { success: false, error: `Webhook failed with status: ${response.status}. Please try again later.` };
    }

    return { success: true };

  } catch (error) {
    console.error('Error submitting to webhook:', error);
    return { success: false, error: 'Could not connect to the submission service. Please check your connection and try again.' };
  }
}
