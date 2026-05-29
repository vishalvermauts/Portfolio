import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import data from "../../data/portfolioData.json";

export const ElementContact = (): JSX.Element => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setResult("");
    
    const formData = new FormData(form);
    formData.append("access_key", "be613fe5-d107-4d9e-917d-0f392b4d9606");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! ✨");
        form.reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setResult(`Error: ${error.message || "Failed to send message"}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="flex min-w-0 flex-1 items-center justify-center bg-white px-6 md:px-12 py-16 lg:py-24 lg:px-20">
      <div className="flex w-full max-w-[1280px] flex-col items-start justify-center gap-6 lg:flex-row lg:items-center lg:gap-8 xl:gap-10">
        <section className="w-full max-w-[340px]">
          <header className="mb-4">
            <p className="mb-2 [font-family:'IBM_Plex_Sans',Helvetica] text-[11px] font-semibold italic leading-6 tracking-[0] text-[#141313]">
              Contact
            </p>
            <h1 className="[font-family:'IBM_Plex_Sans',Helvetica] text-[24px] font-bold leading-[1.15] tracking-[0] text-[#141313] sm:text-[30px] md:text-[34px]">
              REACH OUT TO ME
            </h1>
          </header>
          <address className="not-italic [font-family:'IBM_Plex_Sans',Helvetica] text-[10px] font-normal leading-[16px] tracking-[-0.3px] text-[#141313] whitespace-pre-line">
            {data.profile.address}
          </address>
          <div className="mt-6 flex flex-col gap-2">
            <a
              href={`tel:${data.profile.phone.replace(/\s+/g, '')}`}
              className="[font-family:'IBM_Plex_Sans',Helvetica] text-[22px] font-bold leading-[1.25] tracking-[0] text-[#141313]"
            >
              {data.profile.phone}
            </a>
            <a
              href={`mailto:${data.profile.email}`}
              className="[font-family:'IBM_Plex_Sans',Helvetica] text-[22px] font-bold leading-[1.25] tracking-[0] text-[#141313]"
            >
              {data.profile.email}
            </a>
          </div>
          <nav aria-label="Social links" className="mt-4">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {data.socials.slice(0, 4).map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    className="h-auto p-0 [font-family:'IBM_Plex_Sans',Helvetica] text-[9px] font-medium leading-6 tracking-[-0.27px] text-[#141313] hover:opacity-70 transition-opacity"
                  >
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <Card className="w-full max-w-[775px] rounded-none border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <section className="w-full bg-[linear-gradient(273deg,rgba(255,177,71,1)_0%,rgba(255,108,99,1)_52%,rgba(184,106,223,1)_100%)] px-8 py-7 sm:px-10 sm:py-8 md:px-[34px] md:py-[30px] lg:min-h-[223px] lg:px-[34px] lg:py-[30px]">
              <div className="mx-auto flex w-full max-w-[607px] flex-col">
                <h2 className="[font-family:'IBM_Plex_Sans',Helvetica] text-[20px] font-bold leading-[1.2] tracking-[0] text-white sm:text-[24px] md:text-[27px]">
                  SAY HELLO
                </h2>
                <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[45px]">
                    <label className="flex flex-col gap-1.5">
                      <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[9px] font-medium leading-6 tracking-[0] text-white/80">
                        NAME
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full border-b-[1.5px] border-white/30 bg-transparent outline-none transition-colors focus:border-white/60 text-white placeholder-white/50 pb-1"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[9px] font-medium leading-6 tracking-[0] text-white/80">
                        EMAIL
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full border-b-[1.5px] border-white/30 bg-transparent outline-none transition-colors focus:border-white/60 text-white placeholder-white/50 pb-1"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-7">
                    <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[9px] font-medium leading-6 tracking-[0] text-white/80">
                      MESSAGE
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="border-b-[1.5px] border-white/30 bg-transparent outline-none transition-colors focus:border-white/60 text-white resize-none"
                    />
                  </label>
                  <div className="flex items-center gap-4 mt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-auto w-fit rounded-none bg-[#141313] px-5 py-2.5 [font-family:'IBM_Plex_Sans',Helvetica] text-[10px] font-medium leading-6 tracking-[0] text-white shadow-none hover:bg-[#141313]/95 disabled:opacity-70"
                    >
                      <span>{isSubmitting ? "Sending..." : "Submit now"}</span>
                      {!isSubmitting && (
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      )}
                    </Button>
                    
                    {result && (
                      <span className="text-[12px] font-medium text-white/90">
                        {result}
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
