'use client'
import { title } from "@/components/primitives";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AosPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h1 className={title()}>AOS</h1>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                className="w-full"
                src="https://via.placeholder.com/500"
                alt="Card Image"
                width={500}
                height={500}
              />
              <div className="p-6">
                <h2
                  className="text-xl font-semibold text-gray-800"
                  data-aos="fade-up"
                >
                  Card Title
                </h2>
                <p
                  className="mt-2 text-gray-600"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ultrices augue nec nisi ultricies, sed congue purus
                  scelerisque.
                </p>
                <div className="mt-4 flex justify-end">
                  <a
                    href="#"
                    className="text-blue-500 font-semibold hover:text-blue-600"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
