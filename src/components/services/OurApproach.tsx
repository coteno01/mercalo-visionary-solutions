
const OurApproach = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">Our Approach</h2>
            <p className="text-gray-700 mb-6">
              We believe in a collaborative, results-driven approach that ensures our solutions
              are perfectly aligned with your business objectives and deliver tangible value.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mercalo-light flex items-center justify-center mr-4">
                  <span className="text-mercalo-purple font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Discovery & Assessment</h3>
                  <p className="text-gray-700">
                    We thoroughly analyze your business processes, challenges, and objectives to gain a comprehensive understanding.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mercalo-light flex items-center justify-center mr-4">
                  <span className="text-mercalo-purple font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Solution Design</h3>
                  <p className="text-gray-700">
                    Our team develops a customized solution blueprint tailored to your specific needs and goals.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mercalo-light flex items-center justify-center mr-4">
                  <span className="text-mercalo-purple font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Implementation</h3>
                  <p className="text-gray-700">
                    We execute the solution with minimal disruption to your operations, ensuring a smooth transition.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mercalo-light flex items-center justify-center mr-4">
                  <span className="text-mercalo-purple font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Continuous Support</h3>
                  <p className="text-gray-700">
                    Our partnership doesn't end at implementation—we provide ongoing support, training, and optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Our Approach" 
              className="rounded-lg shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
