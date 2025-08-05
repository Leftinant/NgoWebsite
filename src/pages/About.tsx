import { useState } from "react";

export default function About() {
  const [tab, setTab] = useState("mission");

  return (
    <section className=' py-16 px-6 md:px-30'>
      <h2 className='text-lg font-semibold text-white uppercase mb-2'>
        Who We Are
      </h2>
      <h1 className='text-4xl font-bold text-green-400 mb-6'>About Us</h1>
      <p className='max-w-2xl mb-8 text-gray-400'>
        We are a non-profit organization dedicated to fighting inequality and
        improving lives through education, healthcare, and community-driven
        programs.
      </p>

      {/* Tabs */}
      <div className='flex mb-6'>
        <button
          onClick={() => setTab("mission")}
          className={`p-2 ${
            tab === "mission"
              ? "bg-green-300 text-green-950 "
              : "border-b-2 border-green-300"
          } btn-sm`}>
          Our Mission
        </button>
        <button
          onClick={() => setTab("values")}
          className={`p-2 ${
            tab === "values"
              ? "bg-green-300 text-green-950 "
              : "border-b-2 border-green-300"
          } btn-sm`}>
          Our Values
        </button>
        <button
          onClick={() => setTab("history")}
          className={`p-2 ${
            tab === "history"
              ? "bg-green-300 text-green-950 "
              : "border-b-2 border-green-300"
          } btn-sm`}>
          Our History
        </button>
      </div>

      {/* Tab Content */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
        <div>
          {tab === "mission" && (
            <>
              <h3 className='text-2xl font-semibold text-green-200 mb-4'>
                Our Mission
              </h3>
              <p className='mb-4 text-gray-400'>
                We aim to bring hope and access to underserved communities by
                connecting volunteers, educators, and resources.
              </p>
              <p className='mb-6 text-gray-400'>
                From grassroots education to health programs, we believe in
                empowering lives through knowledge, care, and opportunity.
              </p>
            </>
          )}
          {tab === "values" && (
            <>
              <h3 className='text-2xl font-semibold text-green-200 mb-4'>
                Our Values
              </h3>
              <p className='text-gray-400 mb-6'>
                We value compassion, equity, and sustainability. Every
                initiative we lead is rooted in community-driven solutions and
                long-term impact.
              </p>
            </>
          )}
          {tab === "history" && (
            <>
              <h3 className='text-2xl font-semibold text-green-200 mb-4'>
                Our History
              </h3>
              <p className='text-gray-400 mb-6'>
                Founded in 2020, our NGO has grown from a small local team to a
                network of changemakers across multiple countries.
              </p>
            </>
          )}
          <div className='flex gap-4'>
            <button className='btn btn-success rounded-full'>Donate Now</button>
          </div>
        </div>

        <div className='relative h-72 w-full'>
          <img
            src='/happyKids.png'
            alt='Main image'
            className='absolute bottom-15 right-0 w-150 h-auto object-cover rounded-lg shadow-md z-0'
          />
          <img
            src='/charity.png'
            alt='Overlapping image'
            className='absolute bottom-0 left-0 w-70 h-auto object-cover rounded-lg shadow-lg ring-4 ring-white z-10'
          />
        </div>
      </div>
    </section>
  );
}
