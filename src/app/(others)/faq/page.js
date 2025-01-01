export const metadata = {
  title: "Horizon | FAQ",
  description:
    "Horizon Innovation LLC (doing business as Horizon), describes how and why we might collect, store, use, and/or share your information when you use our services.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/faq`,
  },
};

const FAQPage = () => {
  return (
    <>
      <style>
        {`ul{
        all:revert;
    }
    [data-custom-class='body'], [data-custom-class='body'] * {
            background: transparent !important;
          }
  [data-custom-class='title'], [data-custom-class='title'] * {
            font-family: Arial !important;
  font-size: 26px !important;
  color: #000000 !important;
          }
  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
            font-family: Arial !important;
  color: #595959 !important;
  font-size: 14px !important;
          }
  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
            font-family: Arial !important;
  font-size: 19px !important;
  color: #000000 !important;
          }
  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
            font-family: Arial !important;
  font-size: 17px !important;
  color: #000000 !important;
          }
  [data-custom-class='body_text'], [data-custom-class='body_text'] * {
            color: #595959 !important;
  font-size: 14px !important;
  font-family: Arial !important;
          }
  [data-custom-class='link'], [data-custom-class='link'] * {
            color: #3030F1 !important;
  font-size: 14px !important;
  font-family: Arial !important;
  word-break: break-word !important;
          }`}
      </style>
      <style>
        {`ul {
          list-style-type: square;
        }
        ul > li > ul {
          list-style-type: circle;
        }
        ul > li > ul > li > ul {
          list-style-type: square;
        }
        ol li {
          font-family: Arial ;
        }`}
      </style>
      <div
        className="container mx-auto my-16 rounded-lg bg-[#EEF6FF] p-20"
        dangerouslySetInnerHTML={{
          __html: `
          <div data-custom-class="body">
            <h2 data-custom-class="heading_1">Frequently Asked Questions</h2>
            <ul>
              <li data-custom-class="body_text">
                <strong>What industries can benefit the most from Horizon’s solutions?</strong>
                <br />
                Horizon’s solutions are ideal for telecom, e-commerce, entertainment, sports, and any industry aiming to elevate user engagement and growth.
              </li>
              <li data-custom-class="body_text">
                <strong>Can Horizon integrate with my existing tech stack?</strong>
                <br />
                Yes, Horizon seamlessly integrates with your existing mobile and web platforms using our lightweight SDK.
              </li>
              <li data-custom-class="body_text">
                <strong>How can Horizon help monetize my platform effectively?</strong>
                <br />
                Horizon enables targeted ads, shoppable features, and personalized content to turn engagement into revenue.
              </li>
              <li data-custom-class="body_text">
                <strong>How easy is it to implement Horizon’s solutions for my business?</strong>
                <br />
                Horizon’s no-code console and plug-and-play SDK make implementation fast and hassle-free.
              </li>
              <li data-custom-class="body_text">
                <strong>What kind of support and resources does Horizon provide post-implementation?</strong>
                <br />
                Horizon offers ongoing technical support, analytics tools, and best practices to ensure your success.
              </li>
            </ul>
          </div>
        `,
        }}
      />
    </>
  );
};

export default FAQPage;
