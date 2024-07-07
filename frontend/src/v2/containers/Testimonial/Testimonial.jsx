import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [showAddTestimonial, setShowAddTestimonial] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', image: null, feedback: ""});
  const [loading, setLoading] = useState(false);
  const { name, company, image, feedback } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData(prevFormData => ({
        ...prevFormData,
        image: file
      }));
    }
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const handleSubmit = () => {
    setLoading(true);

    if (image) {
      // Upload image to Sanity
      client.assets.upload('image', image, { filename: image.name })
        .then((imageAsset) => {
          const testimonial = {
            _type: 'testimonials',
            name: formData.name,
            company: formData.company,
            imgurl: {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageAsset._id,
              }
            },
            feedback: formData.feedback,
          };

          return client.create(testimonial);
        })
        .then(() => {
          setLoading(false);
          setShowAddTestimonial((prev) => !prev);
          setFormData({ name: '', company: '', image: null, feedback: "" });
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {
      const testimonial = {
        _type: 'testimonials',
        name: formData.name,
        company: formData.company,
        feedback: formData.feedback,
      };

      client.create(testimonial)
        .then(() => {
          setLoading(false);
          setShowAddTestimonial((prev) => !prev);
          setFormData({ name: '', company: '', image: null, feedback: "" });
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
          <h4 className='head-text'>Testimonials</h4>
      {testimonials.length && (
        <>
          
            { !showAddTestimonial &&
              <>
              <div className="app__testimonial-item app__flex">
              <img src={urlFor(testimonials[currentIndex].imgurl).url()} alt={testimonials[currentIndex].name} />
              <div className="app__testimonial-content">
                <p className="p-text">{testimonials[currentIndex].feedback}</p>
                <div>
                  <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                  <h5 className="p-text">{testimonials[currentIndex].company}</h5>
                </div>
              </div>
            </div>

            <div className="app__testimonial-btns app__flex">
              <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>

              <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
            </>
            }
          
          
        </>
      )}
      {
            showAddTestimonial && 
            <div className='app__testimonial-add'>
              
              <div className="app__footer-form app__flex">
              <div className="app__flex">
                <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
              </div>
              <div className="app__flex">
                <input className="p-text" type="text" placeholder="Your Company" name="company" value={company} onChange={handleChangeInput} />
              </div>
              <div className="app__flex">
                <input className="p-text" type="file" placeholder="Your Image" name="image" onChange={handleFileChange} />
              </div>
              <div>
                <textarea
                  className="p-text"
                  placeholder="Your Message"
                  value={feedback}
                  name="feedback"
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
            </div>


            </div>
          }
          
          <div
            onClick={() => setShowAddTestimonial((prev) => !prev)}
            className=  'app__testimonial-add-btn p-text'
          >
            Add Testimonial
          
          </div>
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl).url()} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
