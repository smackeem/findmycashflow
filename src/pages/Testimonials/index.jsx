import './Testimonials.css'; // Ensure this file is correctly imported
import photo from '../../assets/photooo.jpg'

const Testimonials = () => {
  return (
    <div className="parallax-container mx-auto px-4 py-8">
      <div className="parallax-content container mx-auto p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Testimonials</h1>
        <p className="text-center text-sky-600">Coming soon...</p>
      </div>
      <div className="parallax">
        <img src={photo} alt="Unsplashed background img 1" />
      </div>
    </div>
  );
};

export default Testimonials;
