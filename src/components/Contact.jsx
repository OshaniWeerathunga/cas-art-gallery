import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//template_4ov66ip
//service_wpdzwod
//osJBcaHy6OssQEDIa

//service_f7k3hcj
//template_vrf1e3l
//RimrfFidQ_0eyASoQ

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    code: "",
    message: "",
    focalPoint: "",
    isConfirmed: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      // validation
    if (
      !form.name ||
      !form.email ||
      !form.contact ||
      !form.code ||
      !form.focalPoint ||
      !form.isConfirmed
    ) {
      alert("Please fill all required fields and confirm purchase.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        //'service_f7k3hcj',
        //'template_vrf1e3l',
        service_wpdzwod,
        template_4ov66ip,
        {
          to_name: "Dear",
          from_name: form.name,
          from_email: form.email,
          contact: form.contact,
          code: form.code,
          focal_point: form.focalPoint,
          is_confirmed: form.isConfirmed ? "Yes" : "No",
          message: form.message,
        },
        //'RimrfFidQ_0eyASoQ'
        osJBcaHy6OssQEDIa
        
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            contact: "",
            code: "",
            message: "",
            focalPoint: "",
            isConfirmed: false,
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      //className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Fields marked with <span className="text-red-500">*</span> are required
</p>
        <h3 className={styles.sectionHeadText}>Sell Form</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'><span className="text-red-500 mr-2">*</span> Full Name </span>
            <input
              type='text'
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'><span className="text-red-500 mr-2">*</span>Email Address</span>
            <input
              type='email'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'><span className="text-red-500 mr-2">*</span>Contact Number</span>
            <input
              type='text'
              name='contact'
              required
              value={form.contact}
              onChange={handleChange}
              placeholder="Enter Mobile Number (+974 XXXX XXXX)"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'><span className="text-red-500 mr-2">*</span>Art Number</span>
            <input
              type='text'
              name='code'
              required
              value={form.code}
              onChange={handleChange}
              placeholder="Enter art number ( Ex: 1, 2)"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"><span className="text-red-500 mr-2">*</span>Focal Point</span>

              <div className="relative w-full">
                <select
                  name="focalPoint"
                  required
                  value={form.focalPoint}
                  onChange={handleChange}
                  className="w-full bg-tertiary py-4 pl-6 pr-16 text-white rounded-lg outline-none font-medium appearance-none"
                >
                  <option value="" disabled>
                    Select Focal Point....
                  </option>

                  <option value="UN House">UN House</option>
                  <option value="US Government">US Government</option>
                </select>

                {/* custom dropdown arrow */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none">
                  ▼
                </div>
              </div>
          </label>

          <label className="flex items-center gap-3 text-white font-medium">
            <span className="text-red-500 mr-2">*</span>
            <input
              type="checkbox"
              name="isConfirmed"
              required
              checked={form.isConfirmed}
              onChange={handleChange}
              className="w-5 h-5"
            />
            Confirm Purchase Request
        </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white bg-slate-800 font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
