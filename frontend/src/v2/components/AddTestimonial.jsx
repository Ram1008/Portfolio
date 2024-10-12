import React, { useState } from 'react';
import { client } from '../../client';

const AddTestimonial = ({setShowAddTestimonial}) => {
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

  const handleSubmit = () => {
    setLoading(true);

    if (image) {
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

  return (
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
        <button
          type="button"
          className="p-text"
          onClick={handleSubmit}
          disabled={!name || !company || !image || !feedback}
        >
          {!loading ? 'Submit' : 'Submitting...'}
        </button>

    </div>


    </div>
  )
}

export default AddTestimonial