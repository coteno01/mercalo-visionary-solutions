
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { ContactFormData } from "./ContactFormSchema";

// Your business email address
const BUSINESS_EMAIL = "info@mercaloconsulting.com";

export const useContactFormSubmit = (form: UseFormReturn<ContactFormData>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      console.log(`Sending message to ${BUSINESS_EMAIL}`);
      console.log("Form data:", data);
      
      // Send the form data using EmailJS or a similar service
      // This uses the browser's native mailto functionality as a fallback
      // which will open the user's email client
      const subject = encodeURIComponent(`Mercalo Contact: ${data.subject}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nCompany: ${data.company || 'Not provided'}\n\nMessage: ${data.message}`
      );
      
      // Open the user's email client with prefilled data
      window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
      
      toast({
        title: "Email Client Opened",
        description: `Your message is ready to send to ${BUSINESS_EMAIL}. Please send the email from your client to complete.`,
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error Preparing Email",
        description: "There was an error preparing your message. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
};
