
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, BookOpen } from "lucide-react";

const BlogPage = () => {
  // Categories for filtering
  const categories = ["All", "AI", "ERP", "Automation", "Industry Insights", "Case Studies"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "How AI is Transforming Manufacturing in Africa",
      excerpt: "Explore the impact of artificial intelligence on manufacturing processes across the African continent.",
      category: "AI",
      author: "John Adeyemi",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "5 Ways ERP Systems Drive Business Growth",
      excerpt: "Discover how modern ERP systems are helping businesses streamline operations and accelerate growth.",
      category: "ERP",
      author: "Sarah Nwosu",
      date: "April 28, 2023",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "The Future of Business Process Automation",
      excerpt: "A look at emerging trends and technologies shaping the future of business process automation.",
      category: "Automation",
      author: "David Okonkwo",
      date: "March 10, 2023",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Implementing AI Agents: Challenges and Opportunities",
      excerpt: "An in-depth analysis of the challenges and opportunities associated with implementing AI agents.",
      category: "AI",
      author: "Amina Ibrahim",
      date: "February 22, 2023",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Digital Transformation in African Manufacturing",
      excerpt: "Key insights on how digital technologies are reshaping manufacturing across Africa.",
      category: "Industry Insights",
      author: "John Adeyemi",
      date: "January 18, 2023",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Case Study: AI-Driven Production Optimization",
      excerpt: "A detailed case study on how AI-driven production optimization transformed a manufacturing plant.",
      category: "Case Studies",
      author: "Sarah Nwosu",
      date: "December 5, 2022",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Filter posts by category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Featured post is the first one marked as featured
  const featuredPost = blogPosts.find(post => post.featured);
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-mercalo-light">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Our <span className="text-gradient">Blog</span></h1>
            <p className="text-lg text-gray-700 mb-8">
              Insights, trends, and thought leadership on AI, ERP, 
              and business process automation.
            </p>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 py-6 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post - Enhanced with better visuals */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-mercalo-accent text-white px-3 py-1 rounded-full font-medium mb-4">
                  Featured
                </div>
                <h2 className="heading-lg mb-4">{featuredPost.title}</h2>
                <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <User size={16} className="mr-2" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.id}`}>
                  <Button className="bg-mercalo-accent text-white hover:bg-mercalo-blue">
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute inset-0 bg-mercalo-accent rounded-full opacity-10 blur-3xl"></div>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="rounded-lg shadow-xl relative z-10 transform transition-transform hover:scale-105 duration-300 border-4 border-white" 
                />
                <div className="absolute -bottom-4 -right-4 bg-mercalo-accent text-white rounded-full p-4 shadow-lg z-20">
                  <BookOpen className="text-white" size={24} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Categories - Enhanced contrast */}
      <section className="py-8 bg-mercalo-light">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full transition-all shadow-md ${
                  activeCategory === category
                    ? "bg-mercalo-blue text-white font-medium"
                    : "bg-white text-mercalo-navy hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover transform transition-all hover:translate-y-[-8px]">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 bg-mercalo-light p-2 rounded-full transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowRight className="text-mercalo-purple" size={16} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-mercalo-light px-3 py-1 rounded-full text-mercalo-purple font-medium text-sm mb-4">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-mercalo-purple transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between border-t pt-4 mt-2 border-gray-100">
                      <div className="text-gray-600 text-sm font-medium">{post.author}</div>
                      <div className="text-gray-600 text-sm">{post.date}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-mercalo-purple text-mercalo-purple hover:bg-mercalo-light">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-mercalo-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6 text-white">Stay Updated</h2>
            <p className="text-white mb-8">
              Subscribe to our newsletter to receive the latest insights on AI, ERP, 
              and business process automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                placeholder="Your email address" 
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
              />
              <Button className="bg-white text-mercalo-navy hover:bg-gray-100 sm:flex-shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
