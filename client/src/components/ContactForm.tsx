import { useState } from 'react';

const ContactForm = () => {
  const [image, setImage] = useState<File | null>(null);
  return (
    <>
      <p className="text-[90px] flex justify-center  pt-8">Contact us</p>
      <div className="flex justify-center ">
        <div className="card card-compact w-2/3 p-14 shadow bg-primary text-primary-content m-10 flex items-center justify-center">
          <form action="/" className="w-full">
            <div className="w-full flex flex-row">
              <div className="flex flex-col justify-center items-center w-1/2">
                <div className="flex flex-col my-2 justify-center items-center w-full">
                  <label htmlFor="name" className="flex justify-center mb-2">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="input w-full max-w-xs bg-white"
                  />
                </div>
                <div className="flex flex-col my-2 justify-center items-center w-full">
                  <label htmlFor="email" className="flex justify-center mb-2">
                    Email:
                  </label>

                  <input
                    type="text"
                    name="email"
                    placeholder="Type here"
                    className="input w-full max-w-xs bg-white"
                  />
                </div>
                <div className="flex flex-col my-2 justify-center items-center w-full">
                  <label htmlFor="message" className="flex justify-center mb-2">
                    Message:
                  </label>
                  <textarea
                    className="textarea bg-white w-3/4"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center items-center px-5">
                {image ? (
                  <div className="flex flex-col items-center justify-center">
                    <img
                      alt="not found"
                      width={'250px'}
                      src={URL.createObjectURL(image)}
                      className="w-96 rounded-lg"
                    />
                    <br />
                    <button
                      onClick={() => setImage(null)}
                      className="btn bg-slate-500 hover:bg-slate-800 text-white mt-4"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <input
                    type="file"
                    className="btn 0 hover:bg-slate-800 text-white"
                    onChange={(e: React.ChangeEvent) => {
                      const target = e.target as HTMLInputElement;
                      target.files && setImage(target.files[0]);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="submit"
                value="Submit"
                className="btn bg-slate-500 hover:bg-slate-800 text-white mt-5 w-1/3"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
