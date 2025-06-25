import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Rafiq Ahmed",
      username: "@rafiq_ahmed",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Paying bills used to be a hassle, but this site made it so simple. I paid for electricity, gas, and internet in just a few clicks!",
    },
    {
      name: "Sayti Rahman",
      username: "@saytirahman",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "I love how fast and secure this platform is. No more standing in line or worrying about missed due dates. Highly recommended!",
    },
    {
      name: "Tanvir Hossain",
      username: "@tanvirh",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "The best bill payment site in Bangladesh! The interface is user-friendly, and I even got cashback after paying my bills!",
    },
  ];

  return (
    <section className="py-16  my-16">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-[#95b864] font-semibold uppercase">Testimonials</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          What Our Users Say
        </h2>
      </div>

      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <p className="text-gray-700 italic">“{testimonial.text}”</p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <h4 className="text-gray-900 font-semibold">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">{testimonial.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
