import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-muted-foreground mt-2">Last updated: January 2024</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>1. Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              By accessing and using Smart Farmer platform, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Use License</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Permission is granted to temporarily use Smart Farmer for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The materials on Smart Farmer are provided on an 'as is' basis. Smart Farmer makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Terms;