import {LocationIcon,FacebookIcon, TwitterIcon, EmailIcon,PhoneIcon, LinkedInIcon, FaxIcon} from '../components/etat-desprit/Svg'
export const Contact = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t-8 border-indigo-500 mt-10 " id='CONTACT'>
        <div className="p-10 md:p-20">
          <h1 className="font-black text-4xl">CONTACT</h1>
  
          <div className="text-xs font-medium py-10 flex flex-col gap-y-4">
            <div className="flex gap-x-3 items-center">
              <LocationIcon />
              <span>
                Siège social, Imm. El Emtiez. Centre Urbain Nord, 1003, Tunis.
              </span>
            </div>
  
            <div className="flex gap-x-3 items-center">
              <PhoneIcon />
              <span>+216 71 238 72 / 216 71 233342</span>
            </div>
  
            <div className="flex gap-x-3 items-center">
              <FaxIcon />
              <span>+216 71 234 411 </span>
            </div>
  
            <div className="flex gap-x-3 items-center">
              <EmailIcon />
              <span>info@stbsicar.com.tn</span>
            </div>
          </div>
  
          <div className="flex gap-x-3 items-center">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
        </div>
  
        <div className="p-10 md:p-20 ">
          <div className="flex flex-col gap-y-2 py-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nom:
            </label>
            <input id="name" type="text" className="bg-[#E7E7E7] h-7" />
          </div>
  
          <div className="flex flex-col gap-y-2 py-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email:
            </label>
            <input id="email" type="email" className="bg-[#E7E7E7] h-7" />
          </div>
  
          <div className="flex flex-col gap-y-2  py-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#E7E7E7] h-32 resize-none	"
            ></textarea>
          </div>
  
          <div className="py-2 w-full flex justify-end">
            <button  className=" bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-4 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
              ENVOYER
            </button>
          </div>
        </div>
  
        <div className="col-span-1 md:col-span-2 xl:col-span-1 pr-4 pt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.0207715919255!2d10.19899391529106!3d36.84197857994006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34c8eaaaaaab%3A0x89c29f6c6d8069d8!2sSTB+Sicar!5e0!3m2!1sfr!2s!4v1503328231967"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    );
  };