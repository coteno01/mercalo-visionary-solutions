
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ArrowLeft,
  MessageCircle
} from "lucide-react";

const BlogPostPage = () => {
  const { id } = useParams();
  
  // Mock blog post data - in a real app, this would come from an API call
  const blogPost = {
    id: Number(id),
    title: "How AI is Transforming Manufacturing in Africa",
    excerpt: "Explore the impact of artificial intelligence on manufacturing processes across the African continent.",
    content: `
      <p class="mb-4">The manufacturing sector in Africa is undergoing a significant transformation driven by artificial intelligence (AI) technologies. As global competition intensifies, African manufacturers are increasingly turning to AI-powered solutions to enhance efficiency, reduce costs, and improve product quality.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Current State of Manufacturing in Africa</h2>
      
      <p class="mb-4">The manufacturing sector in Africa represents approximately 11% of the continent's total GDP, with significant variations across regions. While some countries have established manufacturing bases, many still face challenges such as infrastructure limitations, skill gaps, and access to advanced technologies.</p>
      
      <p class="mb-4">Despite these challenges, the sector has shown remarkable resilience and growth potential. The African Continental Free Trade Area (AfCFTA) agreement has created new opportunities for manufacturers by opening up a market of over 1.3 billion people with a combined GDP of $3.4 trillion.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">AI Applications in African Manufacturing</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">1. Predictive Maintenance</h3>
      
      <p class="mb-4">One of the most impactful applications of AI in manufacturing is predictive maintenance. By analyzing data from sensors installed on machinery, AI algorithms can predict equipment failures before they occur, allowing for scheduled maintenance that minimizes downtime and extends machinery lifespan.</p>
      
      <p class="mb-4">In a case study from Nigeria, a large-scale manufacturing plant implemented an AI-based predictive maintenance system that reduced unplanned downtime by 35% and maintenance costs by 25% within the first year of deployment.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">2. Quality Control</h3>
      
      <p class="mb-4">AI-powered computer vision systems are revolutionizing quality control processes across African manufacturing facilities. These systems can inspect products at speeds and accuracy levels unattainable by human inspectors.</p>
      
      <p class="mb-4">A textile manufacturer in Egypt implemented an AI-based quality inspection system that increased defect detection rates by 98% while processing items at three times the speed of manual inspection.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">3. Supply Chain Optimization</h3>
      
      <p class="mb-4">AI algorithms are helping African manufacturers optimize their supply chains by analyzing historical data, market trends, and external factors to make accurate demand forecasts and inventory management decisions.</p>
      
      <p class="mb-4">A South African automotive parts manufacturer implemented an AI-driven supply chain management system that reduced inventory holding costs by 23% and improved on-time delivery rates from 85% to 97%.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">4. Energy Optimization</h3>
      
      <p class="mb-4">Energy costs represent a significant expense for manufacturers. AI systems that monitor and optimize energy usage are helping African manufacturers reduce their energy consumption and carbon footprint.</p>
      
      <p class="mb-4">A Kenyan food processing plant implemented an AI-based energy management system that identified patterns of energy waste and automatically adjusted operations to optimize usage, resulting in a 20% reduction in energy costs.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Challenges and Opportunities</h2>
      
      <p class="mb-4">While the potential benefits of AI in manufacturing are clear, widespread adoption in Africa faces several challenges:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Infrastructure Limitations:</strong> Reliable power supply and internet connectivity remain challenges in many regions.</li>
        <li class="mb-2"><strong>Skills Gap:</strong> There is a shortage of professionals with the necessary expertise to implement and manage AI systems.</li>
        <li class="mb-2"><strong>Initial Investment Costs:</strong> The upfront costs of AI implementation can be prohibitive for smaller manufacturers.</li>
        <li class="mb-2"><strong>Data Quality:</strong> Many manufacturers lack the structured data necessary for effective AI implementation.</li>
      </ul>
      
      <p class="mb-4">Despite these challenges, several factors create a favorable environment for AI adoption in African manufacturing:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Leapfrogging Legacy Systems:</strong> Many African manufacturers can implement cutting-edge AI systems without being constrained by legacy infrastructure.</li>
        <li class="mb-2"><strong>Government Initiatives:</strong> Several African governments have launched initiatives to promote AI adoption in manufacturing.</li>
        <li class="mb-2"><strong>Increasing Investment:</strong> Venture capital investment in African AI startups has grown substantially in recent years.</li>
        <li class="mb-2"><strong>Collaborative Ecosystems:</strong> Innovation hubs and industry partnerships are fostering knowledge sharing and reducing implementation barriers.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Future Outlook</h2>
      
      <p class="mb-4">The future of AI in African manufacturing looks promising. As technology costs decrease and awareness of benefits increases, more manufacturers are expected to embrace AI solutions.</p>
      
      <p class="mb-4">Industry experts predict that by 2030, AI adoption in African manufacturing could contribute an additional $1.5 trillion to the continent's manufacturing output and create millions of new jobs through increased productivity and competitiveness.</p>
      
      <p class="mb-4">For African manufacturers, AI is not just a futuristic concept but an essential tool for remaining competitive in the global marketplace. Those who successfully navigate the implementation challenges will be well-positioned to lead the continent's industrial transformation.</p>
    `,
    category: "AI",
    author: "John Adeyemi",
    authorTitle: "CEO & Founder at Mercalo",
    authorBio: "John has over 15 years of experience in AI and business transformation, with a focus on manufacturing solutions in Africa.",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
    relatedPosts: [
      {
        id: 2,
        title: "5 Ways ERP Systems Drive Business Growth",
        category: "ERP",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 4,
        title: "Implementing AI Agents: Challenges and Opportunities",
        category: "AI",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 5,
        title: "Digital Transformation in African Manufacturing",
        category: "Industry Insights",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80"
      }
    ]
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-mercalo-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-mercalo-purple hover:text-mercalo-accent mb-6">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>
            <div className="inline-block bg-mercalo-light px-3 py-1 rounded-full text-mercalo-purple font-medium mb-4">
              {blogPost.category}
            </div>
            <h1 className="heading-xl mb-6">{blogPost.title}</h1>
            <p className="text-lg text-gray-700 mb-8">
              {blogPost.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="flex items-center text-gray-600">
                  <User size={16} className="mr-2" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock size={16} className="mr-2" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-gray-600">Share:</span>
                <a href="#" className="text-gray-600 hover:text-mercalo-purple">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-gray-600 hover:text-mercalo-purple">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-gray-600 hover:text-mercalo-purple">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-gray-600 hover:text-mercalo-purple">
                  <Share2 size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className="w-full rounded-lg shadow-md" 
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </article>
            
            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2">
              <span className="text-gray-700 font-medium">Tags:</span>
              <a href="#" className="bg-mercalo-light px-3 py-1 rounded-full text-mercalo-purple text-sm hover:bg-mercalo-purple hover:text-white transition-colors">
                Artificial Intelligence
              </a>
              <a href="#" className="bg-mercalo-light px-3 py-1 rounded-full text-mercalo-purple text-sm hover:bg-mercalo-purple hover:text-white transition-colors">
                Manufacturing
              </a>
              <a href="#" className="bg-mercalo-light px-3 py-1 rounded-full text-mercalo-purple text-sm hover:bg-mercalo-purple hover:text-white transition-colors">
                Africa
              </a>
              <a href="#" className="bg-mercalo-light px-3 py-1 rounded-full text-mercalo-purple text-sm hover:bg-mercalo-purple hover:text-white transition-colors">
                Digital Transformation
              </a>
            </div>
            
            {/* Share */}
            <div className="mt-8 flex items-center space-x-3">
              <span className="text-gray-700 font-medium">Share this article:</span>
              <a href="#" className="w-10 h-10 rounded-full bg-mercalo-light flex items-center justify-center text-mercalo-purple hover:bg-mercalo-purple hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-mercalo-light flex items-center justify-center text-mercalo-purple hover:bg-mercalo-purple hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-mercalo-light flex items-center justify-center text-mercalo-purple hover:bg-mercalo-purple hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-mercalo-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 bg-white rounded-lg shadow-md">
              <img 
                src={blogPost.authorImage} 
                alt={blogPost.author}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold mb-1">{blogPost.author}</h3>
                <p className="text-mercalo-purple font-medium mb-4">{blogPost.authorTitle}</p>
                <p className="text-gray-700 mb-4">{blogPost.authorBio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-mercalo-purple">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-mercalo-purple">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Comments (12)</h3>
              <Button className="flex items-center gap-2">
                <MessageCircle size={16} /> Add Comment
              </Button>
            </div>
            
            <div className="space-y-8">
              {/* Sample Comment */}
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-start gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Commenter"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold">Sarah Mensah</h4>
                      <span className="text-sm text-gray-600">3 days ago</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Great article! We've been implementing AI in our manufacturing processes and have seen remarkable improvements in efficiency and product quality.
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="text-mercalo-purple font-medium">Reply</button>
                      <div className="flex items-center gap-1 text-gray-600">
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up">
                            <path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                          </svg>
                        </button>
                        <span>12</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* More comments would be loaded dynamically */}
              <div className="text-center">
                <Button variant="outline">Load More Comments</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-mercalo-light">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg mb-8 text-center">Related Articles</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {blogPost.relatedPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block bg-mercalo-light px-3 py-1 rounded-full text-mercalo-purple font-medium text-sm mb-4">
                        {post.category}
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-mercalo-purple transition-colors">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-mercalo-darkpurple text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Subscribe to Our Blog</h2>
            <p className="text-gray-300 mb-8">
              Stay updated with the latest insights on AI, ERP, and business process automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md bg-white/10 border border-white/30 text-white placeholder:text-gray-300 flex-1"
              />
              <Button className="bg-mercalo-accent hover:bg-white hover:text-mercalo-purple sm:flex-shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
