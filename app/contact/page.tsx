import { Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-12 bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Contact Us</h1>
          <p className="text-gray-500 max-w-[700px]">Have questions about our digital bundle? We're here to help!</p>
        </div>

        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Send us an email and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-6 border rounded-lg bg-gray-50">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-purple-600" />
                  <a href="mailto:support@example.com" className="text-lg font-medium hover:underline">
                    support@example.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
