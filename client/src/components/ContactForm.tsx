import { useState } from 'react';

const ContactForm = () => {
  const [image, setImage] = useState<File | null>(null);
  return (
    <>
      <p className="text-[90px] flex justify-center  pt-8">Contact us</p>
      <div className="flex justify-center ">
        <div className="flex items-center justify-center w-2/3 m-10 shadow card card-compact p-14 bg-primary text-primary-content">
          <form action="/" className="w-full">
            <div className="flex flex-row w-full">
              <div className="flex flex-col items-center justify-center w-1/2">
                <div className="flex flex-col items-center justify-center w-full my-2">
                  <label htmlFor="name" className="flex justify-center mb-2">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="w-full max-w-xs bg-white input"
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-full my-2">
                  <label htmlFor="email" className="flex justify-center mb-2">
                    Email:
                  </label>

                  <input
                    type="text"
                    name="email"
                    placeholder="Type here"
                    className="w-full max-w-xs bg-white input"
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-full my-2">
                  <label htmlFor="message" className="flex justify-center mb-2">
                    Message:
                  </label>
                  <textarea
                    className="w-3/4 bg-white textarea"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center px-5">
                {image ? (
                  <div className="flex flex-col items-center justify-center">
                    <img
                      alt="not found"
                      width={'250px'}
                      src={URL.createObjectURL(image)}
                      className="rounded-lg w-96"
                    />
                    <br />
                    <button
                      onClick={() => setImage(null)}
                      className="mt-4 text-white btn bg-slate-500 hover:bg-slate-800"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <input
                    type="file"
                    className="text-white btn 0 hover:bg-slate-800"
                    onChange={(e: React.ChangeEvent) => {
                      const target = e.target as HTMLInputElement;
                      target.files && setImage(target.files[0]);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="submit"
                value="Submit"
                className="w-1/3 mt-5 text-white btn bg-slate-500 hover:bg-slate-800"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
