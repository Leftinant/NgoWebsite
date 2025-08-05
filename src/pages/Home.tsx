import Navbar from "../components/Navbar";

export default function Home() {
  const items = [
    {
      title: "🌱 Lend a Hand, Lift a Life",
      desc: "Even the smallest act of kindness can make a lasting impact. Join our team of volunteers and help us bring education, health, and opportunity to underserved areas.",
      image: "/help.png",
    },
    {
      title: "🌍 Together, We Rise",
      desc: "Volunteering isn’t just about giving—it’s about growing. Join a movement of change-makers committed to justice, equality, and human dignity.",
      image: "/together.jpg",
    },
  ];
  return (
    <div
      className='w-full bg-cover bg-center rounded-3xl'
      style={{ backgroundImage: "url('/happy.png')" }}>
      <Navbar />
      <div className='w-full md:px-30 px-5 py-20 flex flex-col md:flex-row'>
        <div className='md:w-1/2 w-full pt-15 mb-20'>
          <h1 className='md:text-[4em] text-3xl font-bold text-white'>
            Justice begins where inequality ends
          </h1>
          <p className='py-6 md:text-2xl text-green-100'>
            Empowering communities through education, access, and action.
          </p>
          <button className='py-3 px-5 bg-green-950 mt-10 rounded-full text-white'>
            Volunteer
          </button>
        </div>
        <div className='md:w-1/2 flex max-w-screen md:overflow-x-visible overflow-x-scroll'>
          <div className='mx-5 h-full flex items-center md:w-1/2'>
            <div className='card bg-base-100 image-full w-screen md:w-full shadow-sm rounded-4xl '>
              <figure>
                <img src='/change.png' alt='image' />
              </figure>
              <div className='card-body md:my-10'>
                <h2 className='card-title text-2xl '>
                  🧡 Be the Change You Want to See
                </h2>
                <p className='text-lg '>
                  Your time and compassion can transform lives. Whether it’s
                  teaching, mentoring, or supporting campaigns, your effort
                  brings hope to communities in need.
                </p>
              </div>
            </div>
          </div>
          <div className='md:flex-col flex md:w-1/2'>
            {items.map((item, i) => (
              <div
                key={i}
                className='card bg-base-100 image-full w-screen md:w-full shadow-sm rounded-4xl mx-5 md:my-5'>
                <figure>
                  <img src={item.image} alt='image' />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title text-2xl t'>{item.title}</h2>
                  <p className='text-lg'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
