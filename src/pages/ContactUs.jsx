import React from "react";
import Cards from "../components/contact-us/Card/Cards";
import GetInTouch from "../components/contact-us/GetInTouch/GetInTouch";
import Header from "../components/contact-us/Header/Header";
import MessengerChatHead from "../components/contact-us/MessengerChatHead/MessengerChatHead";
import FormDialog from "../components/contact-us/PopupForm/FormDialog";
import Navbar from "../components/home/Navbar/Navbar";
import Footer from "../components/home/Footer/Footer"

function ContactUs() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <FixedButton /> */}
      <FormDialog />
      <MessengerChatHead />
      <Cards />
      <GetInTouch />
      <Footer />
      {/* <Faq /> */}
    </div>
  );
}

export default ContactUs;
