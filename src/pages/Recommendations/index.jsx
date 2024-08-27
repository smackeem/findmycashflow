import degree from "../../assets/DEGREE.pdf";

const recommendations = [
  {
    title: "Certification",
    imageUrl: degree, // Replace with actual path to your PDF
    type: "pdf"
  },
  {
    title: "Recommendation from Boss 1",
    imageUrl: "https://picsum.photos/id/1/200/300", // Replace with actual path to your image
    type: "image"
  },
  {
    title: "Recommendation from Boss 2",
    imageUrl: "https://picsum.photos/id/2/200/300", // Replace with actual path to your image
    type: "image"
  }
];

const handleImageClick = (url, type) => {
  if (type === "pdf") {
    window.open(url, "_blank");
  } else {
    const img = new Image();
    img.src = url;
    const w = window.open("");
    w.document.write(img.outerHTML);
  }
};

const Recommendations = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Personal Experience</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="p-4 cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
            onClick={() => handleImageClick(item.imageUrl, item.type)}
          >
            {item.type === "pdf" ? (
              <embed
                src={item.imageUrl}
                type="application/pdf"
                className="w-full h-64 rounded-t-lg"
              />
            ) : (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 rounded-t-lg object-cover"
              />
            )}
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-center">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
