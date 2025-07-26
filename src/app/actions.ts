
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
  
  // This webhook URL is for the n8n service.
  const webhookUrl = 'https://n8n-xkgr.onrender.com/webhook/7bd8cf3f-c960-4f9d-94f1-8689c0bc8168';

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
