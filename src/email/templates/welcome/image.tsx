// import {
//   Button,
//   Container,
//   Heading,
//   Img,
//   Section,
//   Text,
// } from "@react-email/components";

// import Layout from "../_components/layout/layout";

// interface IProperties {
//   mainHeading: string;
//   subHeading: string;
//   welcomeMessage: string;
//   username: string;
//   offer: string;
//   learnMoreLink: string;
//   star: string;
// }

// export default function WelcomeEmail(properties: IProperties) {
//   const {
//     learnMoreLink,
//     star,
//     offer,
//     username,
//     mainHeading,
//     subHeading,
//     welcomeMessage,
//   } = properties;

//   return (
//     <Layout>
//       <Section className="w-full max-w-[678px] py-12 md:py-14">
//         <Section className="mx-auto flex items-center justify-center">
//           <Img
//             src={`localhost:3000/images/welcome-email-with-image/email-welcome`}
//             alt="marketing"
//             className="h-[178px] w-[178px]"
//           />
//         </Section>

//         <Container className="max-w-[680px] px-[48px] md:px-0">
//           <Section className="my-[40px] flex flex-col items-center justify-center">
//             <Section className="text-center">
//               <Heading
//                 as="h5"
//                 className="my-0 text-center text-[24px] leading-[28px] text-[#121212]"
//               >
//                 {mainHeading}
//               </Heading>
//               <Text className="my-[12px] text-[1rem] md:text-[18px]">
//                 {subHeading}
//               </Text>
//             </Section>

//             <Section>
//               <Text className="text-[16px] font-[600] text-[#121212] md:text-[18px]">
//                 Hi {username},
//               </Text>
//               <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
//                 {welcomeMessage}
//               </Text>
//             </Section>

//             <Section className="">
//               <Heading
//                 as="h6"
//                 className="mb-[20px] mt-[16px] text-[16px] text-[#121212] md:text-[18px]"
//               >
//                 Here’s what you can look forward to
//               </Heading>
//               <ul className="list-none pl-0">
//                 <li className="flex items-start text-[14px] md:text-[16px]">
//                   <div className="mr-2 flex-shrink-0">
//                     <Img src={star} alt="star" className="h-[24px] w-[24px]" />
//                   </div>
//                   <div>
//                     <span className="font-[600] text-[#121212]">
//                       Exclusive Offers:{" "}
//                     </span>
//                     <span className="leading-[19.36px] text-[#525252]">
//                       {offer}
//                     </span>
//                   </div>
//                 </li>
//                 <li className="mt-[20px] flex items-start text-[14px] md:text-[16px]">
//                   <div className="mr-2 flex-shrink-0">
//                     <Img src={star} alt="star" className="h-[24px] w-[24px]" />
//                   </div>
//                   <div>
//                     <span className="font-[600] text-[#121212]">
//                       Exclusive Offers:{" "}
//                     </span>
//                     <span className="leading-[19.36px] text-[#525252]">
//                       {offer}
//                     </span>
//                   </div>
//                 </li>
//                 <li className="mt-[20px] flex items-start text-[14px] md:text-[16px]">
//                   <div className="mr-2 flex-shrink-0">
//                     <Img src={star} alt="star" className="h-[24px] w-[24px]" />
//                   </div>
//                   <div>
//                     <span className="font-[600] text-[#121212]">
//                       Exclusive Offers:{" "}
//                     </span>
//                     <span className="leading-[19.36px] text-[#525252]">
//                       {offer}
//                     </span>
//                   </div>
//                 </li>
//               </ul>
//             </Section>
//           </Section>
//         </Container>

//         <Section className="text-center">
//           <Container className="mb-[40px] max-w-[680px] px-[48px] md:px-0">
//             <Text className="text-left leading-[16.94px] md:text-[16px]">
//               Want to explore all the details? Click the button below to dive
//               into our comprehensive guide
//             </Text>
//           </Container>
//           <Button
//             className="rounded-[8px] bg-[#F97316] px-[2rem] py-[16px] text-[#FAFAFA]"
//             href={learnMoreLink}
//           >
//             Learn More About us
//           </Button>
//         </Section>
//         <Section className="mt-[40px]">
//           <Container className="max-w-[680px] px-[48px] md:px-0">
//             <Text className="font-[600] text-[#121212]">
//               Regards,
//               <br />
//               Boilerplate
//             </Text>
//           </Container>
//         </Section>
//       </Section>
//     </Layout>
//   );
// }

// WelcomeEmail.PreviewProps = {
//   offer:
//     "Enjoy special promotions and discounts available only to our members.",
//   learnMoreLink: "",
//   username: "John Doe",
//   mainHeading: "Welcome to Boilerplate",
//   subHeading: "Thanks for signing up",
//   star: "https://i.imgur.com/bmprMwh.png",
//   welcomeMessage:
//     "We're thrilled to have you join us. Experience quality and innovation like never before. Our product is made to fit your needs and make your life easier.",
// } as IProperties;

const WelcomeTemlate = () => {
  return <div>WelcomeTemlate</div>;
};
export default WelcomeTemlate;
