
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { contactFormSchema, ContactFormData } from "./ContactFormSchema";
import { ContactFormFields } from "./ContactFormFields";
import { useContactFormSubmit } from "./useContactFormSubmit";

const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const { handleSubmit, isSubmitting } = useContactFormSubmit(form);

  return (
    <div className="bg-white p-8 rounded-xl shadow-md" id="contact-form">
      <h2 className="heading-md mb-6">Send Us a Message</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <ContactFormFields form={form} />

          <Button 
            type="submit"
            className="btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
