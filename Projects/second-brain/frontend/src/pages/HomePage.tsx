import { Twitter, Youtube, Image, StickyNote, ArrowRight, Search, Star } from 'lucide-react';
import { Header } from '../components/Header';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0F172A] overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] translate-x-1/2" />
      
      {/* Header */}
      <Header buttonone="Get Started"/>

      {/* Hero Section */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-white/80 text-sm">Your Personal Knowledge Hub</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-3 pb-3 bg-gradient-to-r from-white via-white to-indigo-300 bg-clip-text text-transparent">
            Remember Everything
            <br />Worth Keeping
          </h1>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your digital life into an organized sanctuary. Save, search, and rediscover your 
            favorite content with SecondBrain.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
              <span>Start For Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-medium hover:bg-white/10 transition-colors border border-white/10">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-30" />
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-2 flex items-center">
            <Search className="w-6 h-6 text-white/40 ml-4" />
            <input 
              type="text" 
              placeholder="Search your digital memories..."
              className="w-full bg-transparent border-0 text-white placeholder-white/40 focus:ring-0 text-lg px-4 py-3"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="h-14 w-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Twitter className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Twitter Archive</h3>
            <p className="text-white/60">Never lose an important tweet again. Save threads and insights for easy access.</p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="h-14 w-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Youtube className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Video Library</h3>
            <p className="text-white/60">Build your personal learning library with your favorite YouTube content.</p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="h-14 w-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <StickyNote className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Smart Notes</h3>
            <p className="text-white/60">Capture ideas instantly with our intelligent note-taking system.</p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="h-14 w-14 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Image className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Visual Memory</h3>
            <p className="text-white/60">Store and organize your images in a beautiful, searchable gallery.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Memory?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Join thousands of people who use SecondBrain to organize their digital life.
            </p>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity inline-flex items-center space-x-2">
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-32 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/40">
          <p>© 2025 SecondBrain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;