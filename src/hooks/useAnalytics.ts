
import { supabase } from '@/integrations/supabase/client';

export type AnalyticsEvent = 
  | 'page_view'
  | 'contact_form'
  | 'project_click'
  | 'resume_download'
  | 'social_click'
  | 'section_view';

export interface AnalyticsData {
  section?: string;
  project_title?: string;
  social_platform?: string;
  url?: string;
  [key: string]: any;
}

export const useAnalytics = () => {
  const trackEvent = async (
    eventType: AnalyticsEvent,
    eventData?: AnalyticsData
  ) => {
    try {
      console.log('Tracking analytics event:', { eventType, eventData });
      
      const { error } = await supabase
        .from('analytics')
        .insert([{
          event_type: eventType,
          event_data: eventData || {},
          user_agent: navigator.userAgent,
          referrer: document.referrer || null,
        }]);

      if (error) {
        console.error('Error tracking analytics:', error);
      } else {
        console.log('Analytics event tracked successfully');
      }
    } catch (error) {
      console.error('Analytics tracking failed:', error);
    }
  };

  return { trackEvent };
};
