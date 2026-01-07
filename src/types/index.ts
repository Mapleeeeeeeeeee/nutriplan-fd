// TypeScript Type Definitions

export interface PricingPlan {
    id: string;
    name: string;
    price: number;
    duration: string;
    description: string;
    features: readonly string[];
    popular: boolean;
    badge?: string;
    targetAudience?: string;
    details?: {
        longDescription: string;
        includes: string[];
        deliverables: string[];
        process: string[];
    };
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface NavItem {
    label: string;
    href: string;
}

// Nutritionist Types
export interface Credential {
    icon: string;
    label: string;
    description?: string;
    highlight?: boolean; // Whether this credential should be highlighted
}

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    targetAudience: string; // e.g., "減脂族", "增肌族"
    calories: number;
    meals: {
        type: '早餐' | '午餐' | '晚餐' | '點心';
        dishes: string[];
    }[];
    tags: string[];
}

export interface Nutritionist {
    id: string;
    name: string;
    title: string;
    shortBio: string;
    fullBio: string;
    image: string;
    instagram: string;
    credentials: Credential[];
    specialties: string[];
    suitableFor: string[];
    quote: string;
    publicMenus?: MenuItem[]; // Optional public menus
}

// Article Types
export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    authorId: string;
    publishedAt: string;
    readTime: number;
    category: string;
    tags: string[];
    content: string;
}

// FAQ Types
export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
}
