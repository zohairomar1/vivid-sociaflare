
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Share2, TrendingUp, Users, GraduationCap, ChevronRight } from "lucide-react";

const Index = () => {
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<'students' | 'clubs'>('students');

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
          <span className="px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium inline-block mb-4 hover:bg-primary/10 transition-colors cursor-pointer">
            Welcome to Social Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Connect. Share. Inspire.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our community of creators, innovators, and storytellers. Share your journey and inspire others.
          </p>
          
          {/* Toggler for Students/Clubs */}
          <div className="inline-flex rounded-full p-1 bg-secondary mb-8">
            {(['students', 'clubs'] as const).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  activeSection === section
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'hover:bg-secondary-foreground/10'
                }`}
              >
                <span className="capitalize">{section}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-xl mx-auto mb-8"
            >
              {activeSection === 'students' ? (
                <p className="text-muted-foreground">
                  Connect with your peers, join student clubs, and showcase your achievements.
                </p>
              ) : (
                <p className="text-muted-foreground">
                  Manage your club activities, recruit members, and organize events effortlessly.
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/5 to-primary-foreground/0 group-hover:translate-x-full transition-transform duration-500" />
          </motion.button>
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
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 text-center cursor-pointer group"
            >
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="w-8 h-8 mx-auto mb-4 text-primary group-hover:text-primary/80"
              >
                <stat.icon className="w-full h-full" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </p>
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
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onHoverStart={() => setHoveredStory(index)}
                onHoverEnd={() => setHoveredStory(null)}
              >
                <motion.div 
                  className="aspect-[4/3] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  initial={false}
                  animate={{
                    y: hoveredStory === index ? 0 : 20,
                    opacity: hoveredStory === index ? 1 : 0,
                  }}
                  className="absolute bottom-0 p-6 w-full"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {story.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">{story.author}</p>
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="text-sm">{story.likes}</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">{story.comments}</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="ml-auto"
                    >
                      <Share2 className="w-4 h-4 text-white/80 hover:text-white transition-colors cursor-pointer" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
            animate={{
              x: ["0%", "100%"],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start sharing your stories with millions of users worldwide. Join our community today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Create Account
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
