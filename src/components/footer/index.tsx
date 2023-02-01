import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            At EVO GYM, our mission is to transform lives by making fun,
            accessible, and effective fitness solutions.
          </p>
          <p>Copyright © 2023, EVO Fitness LLC </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a href="https://nomadix-fitness.myshopify.com/apps/my/courses/list">
            <p className="my-5">Courses</p>
          </a>
          <a href="https://evogym.com/pages/warranty">
            <p className="my-5">Warranty</p>
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">South Park Street, Lithia Springs, GA, 30122</p>
          <p>support@evogym.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
