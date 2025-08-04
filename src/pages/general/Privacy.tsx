import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: January 2024</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Privacy;