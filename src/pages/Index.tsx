import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Dashboard } from "@/components/Dashboard";
import { SpecificationSheet } from "@/components/SpecificationSheet";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturesSection />
      <Dashboard />
      <SpecificationSheet />
    </Layout>
  );
};

export default Index;
