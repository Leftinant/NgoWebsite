import Navbar from "../components/Navbar";

export default function Home() {
  const items = [
    {
      title: "🧡 Be the Change You Want to See",
      desc: "Your time and compassion can transform lives. Whether it’s teaching, mentoring, or supporting campaigns, your effort brings hope to communities in need.",
      image: "/change.png",
    },
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
      style={{ backgroundImage: "url('/person.jpg')" }}>
      <Navbar />
      <div className='w-full md:px-30 px-10 py-20'>
        <div className='md:w-1/2 w-full'>
          <h1 className='md:text-[5em] text-3xl font-bold w-full'>
            Justice begins where inequality ends
          </h1>
          <p className='py-6 md:text-2xl'>
            Empowering communities through education, access, and action.
          </p>
          <button className='p-3 bg-amber-500 mt-10 rounded-xl'>
            Volunteer
          </button>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>
        {items.map((item, i) => (
          <div
            key={i}
            className='card bg-base-100 image-full md:w-1/3 w-full shadow-sm rounded-none'>
            <figure>
              <img src={item.image} alt='image' />
            </figure>
            <div className='card-body m-5'>
              <h2 className='card-title text-xl'>{item.title}</h2>
              <p>{item.desc}</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-warning rounded-2xl'>Donate</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
