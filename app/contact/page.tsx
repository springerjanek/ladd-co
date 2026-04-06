import { ContactForm } from "./components/Form";

export default function ContactPage() {
  return (
    <div className="xl:pl-[92px]">
      <div className="p-6 xl:p-[72px] flex flex-col xl:flex-row xl:justify-between gap-12 xl:gap-24">
        <div className="text-coffee xl:ml-[12px]">
          <h1 className="font-heading  leading-[64.4px] text-[40px] xl:text-[56px]">
            Request an <br /> Introduction
          </h1>
          <p className="text-earth font-sans font-light mt-3 text-[15px] leading-[160%]">
            We can connect you with the experts that can help guide you toward
            achieving your unique goals.
          </p>
        </div>

        <div className="xl:max-w-[520px] w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
