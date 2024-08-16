import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Digimon() {
  return (
    <div className="flex flex-col h-screen">
      <Header className="sticky top-0" />
      <div
        className="relative flex-grow bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://static.wixstatic.com/media/nsplsh_4d955d774b27449b82831703477ba1b8~mv2.jpg/v1/fill/w_2036,h_557,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_4d955d774b27449b82831703477ba1b8~mv2.jpg")',
          minHeight: "85vh",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-12 text-white">
            <h1 className="text-5xl font-bold">Digital Monitoring</h1>
            <p className="text-2xl font-normal text-center">
              Transparency has an important role in conservation. Check out
              <br />
              your mangrove(s) and coral(s) adoption photos here!
            </p>
            <Link
              onClick={() =>
                window.open("https://partner.rimbuni.com/login", "_blank")
              }
            >
              <Button
                variant="primary"
                className="w-64 text-xl hover:bg-slate-400 hover:text-white"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0A3E6D] grid lg:grid-cols-2 items-center gap-20 py-16 px-40">
        <img
          src="https://static.wixstatic.com/media/b6a409_ce69fe1e95744a1f8fd9047d418389cd~mv2.jpg/v1/crop/x_0,y_648,w_3376,h_2400/fill/w_633,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Copy%20of%20DSC00596_JPG.jpg"
          alt=""
          className="flex justify-center items-center rounded-3xl"
        />
        <div className="grid gap-10 text-white font-medium text-xl">
          <p>
            Mangroves are tropical trees that are spectacular in naturally
            protecting coastal communities living on coastlines from damaging
            storms, hurricanes, rising sea levels, and erosion. They support
            rich biodiversity, providing a protective breeding habitat for fish
            and crustaceans, this also supports livelihood for coastal
            communities to thrive.
          </p>
          <Link
            onClick={() =>
              window.open(
                "https://www.carbonethics.co/blue-carbon-ecosystem",
                "_blank"
              )
            }
          >
            <p className="underline">Learn more &gt;</p>
          </Link>
          <p>
            Thanks to our mangrove supporters, we&apos;re hoping to restore
            mangroves back into the ecosystem.
          </p>
        </div>
      </div>
      <div className="bg-[#71CDBF] grid lg:grid-cols-2 items-center gap-20 py-16 px-40">
        <img
          src="https://static.wixstatic.com/media/26e05d_ba80277859e84ee3906648c51856bb7b~mv2.jpg/v1/crop/x_452,y_98,w_2976,h_1854/fill/w_663,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GPTempDownload_1-2.jpg"
          alt=""
          className="flex justify-center items-center rounded-tl-[40px] rounded-br-[40px]"
        />
        <div className="grid gap-10 text-[#0A3E6D] font-medium text-xl">
          <p>
            Coral is a key marine ecosystem and an important ally in mitigating
            the effects of climate change. Besides, they also help to protect
            coastlines, provide habitats and shelter for other marine organisms.
            However, in the past 3 decades, the world has lost half of its total
            coral population.
          </p>
          <Link
            onClick={() =>
              window.open(
                "https://www.carbonethics.co/life-below-water",
                "_blank"
              )
            }
          >
            <p className="underline">Learn more &gt;</p>
          </Link>
          <p>
            Thanks for your help, we hope to be able to restore coral reefs to
            the ecosystem.
          </p>
        </div>
      </div>
      <Footer className="sticky bottom-0" />
    </div>
  );
}
