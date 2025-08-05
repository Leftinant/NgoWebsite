// components/VolunteerModal.tsx

export default function VolunteerModal() {
  return (
    <dialog id='volunteer_modal' className='modal'>
      <div className='modal-box bg-green-200 rounded-4xl'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='font-bold text-4xl mb-4 text-green-800'>
          Volunteer With Us
        </h3>

        <form className='space-y-4'>
          <input
            type='text'
            placeholder='Full Name'
            className='input input-bordered w-full bg-green-100 rounded-2xl'
            required
          />
          <input
            type='email'
            placeholder='Email Address'
            className='input input-bordered w-full bg-green-100 rounded-2xl'
            required
          />
          <input
            type='text'
            placeholder='Location'
            className='input input-bordered w-full bg-green-100 rounded-2xl'
          />
          <textarea
            placeholder='Why do you want to volunteer?'
            className='textarea textarea-bordered w-full bg-green-100 rounded-2xl'
            rows={4}
          />

          <div className='modal-action'>
            <button type='submit' className='btn btn-success rounded-2xl'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
