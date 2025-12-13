import React, { useEffect, useRef, memo } from "react";

const TradingViewWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false); // ⭐ Prevent StrictMode double-inject

  useEffect(() => {
    if (initializedRef.current) return; // Prevent second execution
    initializedRef.current = true;

    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = `
      {
        "symbol": "NYSE:NET",
        "colorTheme": "dark",
        "isTransparent": true,
        "locale": "en",
        "width": "100%"
      }
    `

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget" />
    </div>
  );
};

export default memo(TradingViewWidget);
