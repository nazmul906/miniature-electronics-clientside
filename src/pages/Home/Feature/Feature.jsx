import React from "react";
import { motion } from "framer-motion";

const FloatingImages = () => {
  const images = [
    "https://i.ibb.co/YtYTSpV/photo-1532330393533-443990a51d10-ixlib-rb-4-0.jpg",
    "https://i.ytimg.com/vi/S4H6zDtX9Sw/maxresdefault.jpg",
    "https://w2f2z6e6.stackpathcdn.com/photos/33/17/453186_24717_XXL.jpg",
    "https://static-01.daraz.com.bd/p/3cd8850574b40bd3017464c80e488933.jpg",
    "https://sourceofproduct.com/wp-content/uploads/2022/08/DJI-Mini-3-Pro-P1.jpg ",
    // Add more image URLs as needed
  ];

  return (
    <div className=" mb-10 p-9 m-10 pb-9">
      <h1 className="text-4xl font-semibold mb-10 text-center">Toy Gallary</h1>
      <div className="flex gap-6">
        {" "}
        {images.map((imageUrl, index) => (
          <motion.div
            key={index}
            className="floating-image"
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
              ease: "linear",
              delay: index * 0.5, // Add a delay to stagger the animations
            }}
          >
            <img
              src={imageUrl}
              alt={`Floating Image ${index}`}
              style={{ width: "250px", height: "200px" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloatingImages;

/*Here, we use motion.div from Framer Motion to create a container for our image. This container will be responsible for the animation.
initial specifies the initial state of the container, including its y (vertical) position. In this case, the container starts 20 pixels above its normal position.
animate specifies the target state of the container. It animates the y position of the container to 20 pixels below its normal position.
transition defines the animation properties:
repeat: Infinity: This makes the animation repeat infinitely.
duration: 2: The duration of one complete animation cycle is set to 2 seconds.
repeatType: "reverse": After each cycle, the animation reverses direction, creating the floating effect.
ease: "linear": The animation follows a linear easing function, which means it moves at a constant speed. */
