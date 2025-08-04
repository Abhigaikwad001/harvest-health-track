import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@smartfarmer.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Smart Farmer Technologies Pvt Ltd",
      description: "Bangalore, Karnataka, India"
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "24/7 Chat Support",
      description: "Always here to help"
    }
  ];

  const faqItems = [
    {
      question: "How do I get started with Smart Farmer?",
      answer: "Simply register for a free account and complete your farm profile. You'll get access to all basic features immediately."
    },
    {
      question: "Is the platform free to use?",
      answer: "We offer a free tier with essential features. Premium features are available with our paid plans starting at ₹99/month."
    },
    {
      question: "Can I use this for different types of crops?",
      answer: "Yes! Our platform supports 50+ crop types including cereals, vegetables, fruits, and cash crops."
    },
    {
      question: "Do you provide support in local languages?",
      answer: "Currently we support Hindi and English. We're working on adding more regional languages soon."
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need help? We're here to support your farming journey.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+91 98765 43210" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us how we can help you..."
                  rows={5}
                />
              </div>

              <Button className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Multiple ways to reach our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-sm font-medium">{info.content}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Monday - Friday</span>
                  <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Saturday</span>
                  <span className="text-sm font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Sunday</span>
                  <span className="text-sm font-medium">Closed</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between">
                    <span className="text-sm">Emergency Support</span>
                    <span className="text-sm font-medium text-green-600">24/7 Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Quick answers to common questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {faqItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-medium">{item.question}</h4>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800">Emergency Support</CardTitle>
            <CardDescription className="text-red-700">
              For urgent farming emergencies or critical issues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-800 mb-1">24/7 Emergency Helpline</p>
                <p className="text-lg font-bold text-red-900">+91 98765 00000</p>
              </div>
              <Button variant="destructive">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Contact;