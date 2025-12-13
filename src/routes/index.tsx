import TradingViewWidget from "@/components/TradingViewWidget"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background video */}
      <video
        className="fixed inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/shaghai_bg.mp4" type="video/mp4" />
      </video>

      <div className="grid min-h-screen min-w-screen place-items-center p-12">
        <div className="p-12 grid h-[860px] w-[1330px] grid-cols-3 grid-rows-2 gap-8 rounded-2xl bg-black/30 text-2xl font-medium text-white backdrop-blur-md">
          <div className="flex items-center justify-center rounded-2xl bg-[#1f1f1f]">
            <div className="grid h-full w-full place-items-center rounded-2xl bg-[#121212]">
              <iframe
                data-testid="embed-iframe"
                className="rounded-lg"
                src="https://open.spotify.com/embed/album/31eKAtKWWzdhzSn2PG21up?utm_source=generator&theme=0"
                height="360"
                width="390"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-[#1f1f1f] p-8">
            {/* Calendar */}
            <div className="grid h-full w-full place-items-center rounded-lg bg-[#1f1f1f]">
              <TradingViewWidget />
            </div>
          </div>
          {/* <div className="col-span-1 row-span-1 flex items-center justify-center rounded-2xl bg-[#1f1f1f]">
          News
        </div> */}

          {/* Watchlist */}
          <div className="col-start-3 flex items-center justify-center rounded-2xl bg-[#1f1f1f]">
            Watchlist
          </div>

          {/* Asset (col 1–4) */}
          <div className="col-span-2 flex items-center justify-center rounded-2xl bg-[#1f1f1f]">
            Asset
          </div>

          {/* Note */}
          <div className="flex items-center justify-center rounded-2xl bg-[#1f1f1f]">
            Note
          </div>
        </div>

        {/* <header className="flex min-h-screen flex-col items-center justify-center gap-y-8 bg-[#282c34] text-[calc(10px+2vmin)] text-white">
        <div className="w-5 w-120 rounded-xl">
          <TradingViewWidget />
        </div>
        <div className="w-160">
          <iframe
            data-testid="embed-iframe"
            className="rounded-lg"
            src="https://open.spotify.com/embed/playlist/04DdxCBJyUbqpvuDzn5bA2?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </header> */}
      </div>
    </div>
  )
}