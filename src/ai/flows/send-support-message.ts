'use server';
/**
 * @fileOverview A flow to send a support message to a Discord webhook.
 * 
 * - sendSupportMessage - A function that handles sending the support message.
 * - SupportMessageInput - The input type for the sendSupportMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const SupportMessageInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The content of the support message.'),
});
export type SupportMessageInput = z.infer<typeof SupportMessageInputSchema>;

export async function sendSupportMessage(input: SupportMessageInput): Promise<{ success: boolean }> {
  return sendSupportMessageFlow(input);
}

const sendSupportMessageFlow = ai.defineFlow(
  {
    name: 'sendSupportMessageFlow',
    inputSchema: SupportMessageInputSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    const webhookUrl = "https://discord.com/api/webhooks/1408495616610402475/oAWSHUpEmJUMD819W5kg80NamP7lvU_dV0UG9p9qH8BsFp6wuk8FWfUkM7ji5hvRaTYa";
    
    const discordPayload = {
      embeds: [
        {
          title: `New Support Request: ${input.subject}`,
          color: 5814783, // A nice blue color
          fields: [
            {
              name: "From",
              value: `${input.name} (<${input.email}>)`,
              inline: false,
            },
            {
              name: "Message",
              value: input.message,
              inline: false,
            }
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Focus-IN Support Form"
          }
        }
      ]
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordPayload),
      });

      if (!response.ok) {
        console.error('Failed to send message to Discord:', response.status, await response.text());
        return { success: false };
      }
      return { success: true };
    } catch (error) {
      console.error('Error sending message to Discord:', error);
      return { success: false };
    }
  }
);
