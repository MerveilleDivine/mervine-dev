
import React, { useState } from 'react';
import { Mail, User, MessageSquare } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { supabase } from '../integrations/supabase/client';
import { useAnalytics } from '../hooks/useAnalytics';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useTranslation } from 'react-i18next';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { trackEvent } = useAnalytics();
  const { t } = useTranslation();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      console.log('Submitting contact form with values:', values);
      
      // Track analytics event
      await trackEvent('contact_form', {
        name: values.name,
        email: values.email
      });
      
      // First, insert the message into the Supabase database
      const { error: insertError } = await supabase
        .from('messages')
        .insert([{
          name: values.name,
          email: values.email,
          message: values.message
        }]);

      if (insertError) {
        console.error('Database insert error:', insertError);
        throw new Error(insertError.message);
      }
      
      console.log('Message saved to database successfully');
      
      // Send email notifications
      try {
        const response = await fetch('https://fiqpjsefbofwvbbvzrib.supabase.co/functions/v1/send-notification-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpcXBqc2VmYm9md3ZiYnZ6cmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNTA5NTcsImV4cCI6MjA2MjYyNjk1N30.U-HaBtCsPIlGH08DMA9HoMMUg-oH19wOHkuqaq_BYuo`,
          },
          body: JSON.stringify(values)
        });

        console.log('Email notification response status:', response.status);

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Email notification error:', errorData);
        } else {
          console.log('Email notifications sent successfully');
        }
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }

      toast({
        title: t('contact.success_title'),
        description: t('contact.success_message'),
      });
      
      form.reset();
      console.log('Form reset successfully');
      
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast({
        title: t('contact.error_title'),
        description: error.message || t('contact.error_message'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      console.log('Form submission completed');
    }
  };

  return (
    <div className="h-full flex flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 md:p-8 space-y-6 h-full flex flex-col">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">
                  {t('contact.form.name')}
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <User size={18} />
                    </span>
                    <Input
                      placeholder={t('contact.form.name_placeholder')}
                      className="w-full py-3 pl-10 pr-4 border rounded-lg focus:outline-none"
                      {...field}
                    />
                  </div>
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
                <FormLabel className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">
                  {t('contact.email')}
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail size={18} />
                    </span>
                    <Input
                      placeholder={t('contact.form.email_placeholder')}
                      className="w-full py-3 pl-10 pr-4 border rounded-lg focus:outline-none"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">
                  {t('contact.form.message')}
                </FormLabel>
                <FormControl>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-4 text-gray-400">
                      <MessageSquare size={18} />
                    </span>
                    <Textarea
                      placeholder={t('contact.form.message_placeholder')}
                      className="w-full py-3 pl-10 pr-4 border rounded-lg focus:outline-none resize-none min-h-[160px] h-full"
                      rows={8}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center py-3 px-6 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {t('contact.form.sending')}
              </>
            ) : (
              t('contact.form.send')
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
