import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import data from "../../data/portfolioData.json";

export const ElementContact = (): JSX.Element => {
  return (
    <section className="flex min-w-0 flex-1 items-center justify-center bg-white px-12 py-2 lg:px-20">
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
                  ANY PROJECT?
                </h2>
                <form className="mt-5 flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[45px]">
                    <label className="flex flex-col gap-1.5">
                      <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[9px] font-medium leading-6 tracking-[0] text-white/80">
                        NAME
                      </span>
                      <input
                        type="text"
                        className="h-[1.5px] border-0 bg-white/30 outline-none transition-colors focus:bg-white/60"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[9px] font-medium leading-6 tracking-[0] text-white/80">
                        EMAIL
                      </span>
                      <input
                        type="email"
                        className="h-[1.5px] border-0 bg-white/30 outline-none transition-colors focus:bg-white/60"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-7">
                    <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[9px] font-medium leading-6 tracking-[0] text-white/80">
                      MESSAGE
                    </span>
                    <input
                      type="text"
                      className="h-[1.5px] border-0 bg-white/30 outline-none transition-colors focus:bg-white/60"
                    />
                  </label>
                  <button
                    type="button"
                    className="flex h-auto w-fit items-center gap-2 p-0"
                  >
                    <svg className="h-4 w-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[9px] font-medium leading-6 tracking-[0] text-white/80">
                      ATTACH FILE
                    </span>
                  </button>
                  <Button
                    type="submit"
                    className="h-auto w-fit rounded-none bg-[#141313] px-5 py-2.5 [font-family:'IBM_Plex_Sans',Helvetica] text-[10px] font-medium leading-6 tracking-[0] text-white shadow-none hover:bg-[#141313]/95"
                  >
                    <span>Submit now</span>
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Button>
                </form>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
