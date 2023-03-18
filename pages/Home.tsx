import React from "react";
import { NextPage } from "next";
import { Box, Grid, Typography } from "@mui/material";
import ProductDetailsCards from "@/components/productDetailsSection";

const Home: NextPage = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: "#F7FAFE" }} marginTop="8vh">
      <Grid container justifyContent="center" textAlign="center" marginBottom={2}>
        <Grid item xs={8} sm={6} lg={4} style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
          <Typography variant="body1" color="primary" sx={{
            paddingLeft: 0
          }}>EASY SCHEDULING AHEAD</Typography>
          <Typography
            variant="h4"
            fontWeight="500"
            color="secondary"
          >
            Increase collaboration between students, faculty, and staff
          </Typography>
        </Grid>
      </Grid>

      <ProductDetailsCards
        text1={"STREAMLINE RECRUITING"}
        text2={"Accelerate your admissions cycle"}
        text3={"Recruit more efficiently, interview prospective students faster, and deliver an exceptional experience to every applicant throughout the interview process."}
        buttonText={"Embed Calendly on your website"}
        reverse={false}
        imageSrc={"https://images.ctfassets.net/k0lk9kiuza3o/1CSH2FJZrb1XMOOHO7NweH/a6960a82551ea9b7f80fcc20b73817e0/Calendly-Round-Robin-Education__2_.png?w=1140&h=931&q=85&fm=webp"}
      />

      <ProductDetailsCards
        text1={"BOOK INSTANTLY"}
        text2={"Schedule student meetings in just a few clicks"}
        text3={"Make it easy and fast for students to book advising hours while ensuring that educators and faculty can maintain control of their schedules."}
        buttonText={"Set your availability"}
        reverse={true}
        imageSrc={"https://images.ctfassets.net/k0lk9kiuza3o/7e7hoySQhofK5HyHarOBfq/ffcd12ec68cccb71232fe46e784a846b/Calendly-education-scheduling.png?w=1140&h=930&q=85&fm=webp"}
      />
      <ProductDetailsCards
        text1={"BE ACCESSIBLE"}
        text2={"Support students when they need it most"}
        text3={"Increase student performance by making services and resources more accessible to them with simplified scheduling. Enable students to easily pick a time for a dedicated meeting - in person or virtually."}
        buttonText={"Share your availability for any occasion"}
        reverse={false}
        imageSrc={"https://images.ctfassets.net/k0lk9kiuza3o/4tuIm9584MUzPjeXTdbIIA/4cb12488aca6f157461c0c22be14633e/Calendly-Email-Embed-Education.png?w=1140&h=931&q=85&fm=webp"}
      />

      <ProductDetailsCards
        text1={"REDUCE ADMIN COSTS"}
        text2={"Simplify technology and resource management"}
        text3={"Cut costs and save time by enabling staff to reserve equipment and resources. Collect key information at the time of reservation to provide staff and students with the right equipment and training materials."}
        buttonText={"Create an online booking system"}
        reverse={true}
        imageSrc={"https://images.ctfassets.net/k0lk9kiuza3o/4lAjSiOoadmCnmEL4xpgva/f102cc15b48b03975370e862a4ca2c47/Calendly-education-admin.png?w=1140&h=930&q=85&fm=webp"}
      />


    </Box>
  );
};

export default Home;


