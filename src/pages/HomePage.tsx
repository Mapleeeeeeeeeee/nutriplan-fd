import { Header, Footer } from '../components/layout';
import { SEO } from '../components/ui';
import { HeroSection } from '../features/hero';
import { FeatureShowcase } from '../features/features';
import { ExpertProfile } from '../features/expert';
import { ComparisonSection } from '../features/comparison';
import { PricingTable } from '../features/pricing';

export function HomePage() {
    return (
        <>
            <SEO
                description="專業營養師為你打造的個人化飲食規劃服務。精美菜單圖卡，照著吃就好，不用算熱量。"
            />
            <div className="min-h-screen bg-slate-50">
                <Header />
                <main>
                    <HeroSection />
                    <FeatureShowcase />
                    <ComparisonSection />

                    <ExpertProfile />
                    <PricingTable />
                </main>
                <Footer />
            </div>
        </>
    );
}
