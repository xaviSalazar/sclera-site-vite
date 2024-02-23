export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  content?: ContentNavItem[];
  icon?:  React.ElementType; // Add this line
}

export interface ContentNavItem extends NavItem {
  href: string;
}

export type SocialProfile = {
    name: string;
    link: string;
  };

  export type AuthorType = {
    name: string;
    handle: string;
    socialProfiles: SocialProfile[];
    email: string;
    website: string;
    jobTitle: string;
    company?: string;
    availableForWork: boolean;
    location: {
      city: string;
      media: string;
    };
  };

  export type SiteMetaData = {
    title: {
      template: string;
      default: string;
    };
    description: string;
    siteRepo: string;
    newsletterProvider?: NewsletterProvider;
    newsletterUrl?: string;
    analyticsProvider?: AnalyticsProvider;
    defaultTheme: "light" | "dark" | "system";
    activeAnnouncement: boolean;
    announcement: Pick<AnnouncementBarProps, "buttonText" | "link">;
    postsPerPage: number;
    postsOnHomePage: number;
    projectsOnHomePage: number;
  };