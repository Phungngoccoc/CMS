// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "../../Style/Partner.scss";
// import digital from "../../../assets/image/digital.webp";

// const Partner = React.memo((props) => {
//   const [slidesToShow, setSlidesToShow] = useState(5);
//   const updateSlidesToShow = () => {
//     const width = window.innerWidth;

//     if (width <= 480) {
//       setSlidesToShow(3);
//     } else if (width <= 768) {
//       setSlidesToShow(4);
//     } else if (width <= 1024) {
//       setSlidesToShow(4);
//     } else {
//       setSlidesToShow(5);
//     }
//   };

//   useEffect(() => {
//     updateSlidesToShow();
//     window.addEventListener("resize", updateSlidesToShow);
//     return () => {
//       window.removeEventListener("resize", updateSlidesToShow);
//     };
//   }, []);

//   const CustomPrevArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//       <button
//         className={`${className} custom-prev`}
//         onClick={onClick}
//         aria-label="Previous"
//       >
//         <i className="fa fa-arrow-left"></i>
//       </button>
//     );
//   };

//   const CustomNextArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//       <button
//         className={`${className} custom-next`}
//         onClick={onClick}
//         aria-label="Next"
//       >
//         <i className="fa fa-arrow-right"></i>
//       </button>
//     );
//   };

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: slidesToShow, // Sử dụng state để thay đổi số lượng slide
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     arrows: true,
//     prevArrow: <CustomPrevArrow />, // Gán CustomPrevArrow
//     nextArrow: <CustomNextArrow />, // Gán CustomNextArrow
//   };

//   return (
//     <div className="section-partner">
//       <div className="container">
//         <h4>PARTNERS</h4>
//         <div className="partners-slider">
//           <Slider {...settings}>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//             <div
//               className="item"
//               style={{
//                 backgroundImage:
//                   "url('https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443')",
//               }}
//             ></div>
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Partner;
