"use client"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Get in Touch"
        subtitle="Schedule a Confidential Consultation"
        backgroundImage="/singapore-marina-bay-sands.png"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Please contact us with any questions. Our specialist advisors will get back to you to schedule a
                  confidential, no-obligation consultation.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate">Corporate Services</SelectItem>
                      <SelectItem value="citizenship">Citizenship & Relocation</SelectItem>
                      <SelectItem value="real-estate">Real Estate Advisory</SelectItem>
                      <SelectItem value="other">Other Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-lg">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="border-none shadow-lg bg-slate-50">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Global Headquarters</h4>
                      <p className="text-muted-foreground">
                        Financial District
                        <br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Phone</h4>
                      <p className="text-muted-foreground">+971 4 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Email</h4>
                      <p className="text-muted-foreground">contact@prosolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Office Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-primary mb-2">Privacy Commitment</h4>
                <p className="text-sm text-muted-foreground">
                  We respect your privacy. All information provided is treated with the strictest confidence in
                  accordance with our privacy policy and GDPR regulations. We do not share your details with third
                  parties without your consent.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
