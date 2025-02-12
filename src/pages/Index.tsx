
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 py-8 mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium inline-block mb-4">
            Welcome to Social Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Connect. Share. Inspire.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our community of creators, innovators, and storytellers. Share your journey and inspire others.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { icon: Users, label: "Active Users", value: "2M+" },
            { icon: MessageCircle, label: "Daily Messages", value: "500K+" },
            { icon: Heart, label: "Stories Shared", value: "1M+" },
            { icon: TrendingUp, label: "Growing Daily", value: "25K+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="glass-effect rounded-2xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Stories */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Digital Art Revolution",
                author: "Sarah Chen",
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                likes: "2.5K",
                comments: "89",
              },
              {
                title: "Future of Work",
                author: "Mark Johnson",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                likes: "1.8K",
                comments: "123",
              },
              {
                title: "Tech Innovation",
                author: "Lisa Wong",
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                likes: "3.2K",
                comments: "167",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6 w-full">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {story.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">{story.author}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-white/80">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="text-sm">{story.likes}</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">{story.comments}</span>
                    </div>
                    <div className="ml-auto">
                      <Share2 className="w-4 h-4 text-white/80 hover:text-white transition-colors cursor-pointer" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-effect rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start sharing your stories with millions of users worldwide. Join our community today.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
            Create Account
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
