
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { ContactFormData } from "./ContactFormSchema";

export const useContactFormSubmit = (form: UseFormReturn<ContactFormData>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // In a production environment, this would send the data to a server
      console.log("Sending message to info@mercaloconsulting.com");
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully",
        description: "Your message has been sent to info@mercaloconsulting.com. We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error Sending Message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
};
