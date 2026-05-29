import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, Zap, BarChart3, Lock, Share2 } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20 sm:py-32">
        <div className="w-full max-w-4xl">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Shorten. Share. Track.
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
                Create short, memorable links and track their performance. Perfect for marketing campaigns, social media, and sharing on the go.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <SignUpButton mode="modal">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-100">
                  Get Started Free
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button size="lg" variant="outline" className="border-zinc-600 hover:bg-zinc-900">
                  Sign In
                </Button>
              </SignInButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:py-32 bg-zinc-950">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
            Powerful Features for Every Need
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Easy Creation */}
            <div className="space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600/10 text-blue-400">
                <LinkIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold">Easy Link Shortening</h3>
              <p className="text-zinc-400">
                Paste any long URL and instantly get a short, clean link ready to share.
              </p>
            </div>

            {/* Feature 2: Lightning Fast */}
            <div className="space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-600/10 text-green-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold">Lightning Fast</h3>
              <p className="text-zinc-400">
                Ultra-fast redirects and minimal latency ensure your users reach their destination instantly.
              </p>
            </div>

            {/* Feature 3: Analytics */}
            <div className="space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-600/10 text-purple-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold">Detailed Analytics</h3>
              <p className="text-zinc-400">
                Track clicks, geographic data, and referrer sources to understand your audience better.
              </p>
            </div>

            {/* Feature 4: Security */}
            <div className="space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-600/10 text-yellow-400">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold">Secure & Reliable</h3>
              <p className="text-zinc-400">
                Enterprise-grade security with SSL encryption and reliable uptime you can count on.
              </p>
            </div>

            {/* Feature 5: Custom Links */}
            <div className="space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-pink-600/10 text-pink-400">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold">Custom Aliases</h3>
              <p className="text-zinc-400">
                Create branded, memorable links that reflect your brand and build trust.
              </p>
            </div>

            {/* Feature 6: Manage */}
            <div className="space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-600/10 text-cyan-400">
                <LinkIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold">Easy Management</h3>
              <p className="text-zinc-400">
                Organize, edit, and manage all your links from one intuitive dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:py-32">
        <div className="w-full max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to start shortening?
          </h2>
          <p className="text-lg text-zinc-400">
            Join thousands of users who are already shortening and tracking their links.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <SignUpButton mode="modal">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-100">
                Create Your First Link
              </Button>
            </SignUpButton>
          </div>
        </div>
      </section>
    </div>
  );
}
