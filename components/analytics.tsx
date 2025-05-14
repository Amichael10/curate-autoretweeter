export function Analytics() {
  return (
    <div className="space-y-6">
      <div className="inline-block bg-[#70a1ff] text-black font-bold px-4 py-2 border-2 border-black mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        Bot Analytics
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-bold mb-2">Rule Performance</h3>
          <div className="h-40 bg-[#f0f4ff] border-2 border-black flex items-center justify-center">
            <p className="text-sm font-medium">Rule performance chart will appear here</p>
          </div>
        </div>

        <div className="border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-bold mb-2">Engagement Stats</h3>
          <div className="h-40 bg-[#f0f4ff] border-2 border-black flex items-center justify-center">
            <p className="text-sm font-medium">Engagement statistics will appear here</p>
          </div>
        </div>
      </div>

      <div className="border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="font-bold mb-2">Recent Activity</h3>
        <div className="space-y-2">
          <div className="bg-[#f0f4ff] border-2 border-black p-2 text-sm">
            <p>
              <span className="font-bold">2 hours ago:</span> Rule "Positive Mentions" triggered by @user123
            </p>
          </div>
          <div className="bg-[#f0f4ff] border-2 border-black p-2 text-sm">
            <p>
              <span className="font-bold">5 hours ago:</span> Rule "Crypto News" triggered by @cryptofan
            </p>
          </div>
          <div className="bg-[#f0f4ff] border-2 border-black p-2 text-sm">
            <p>
              <span className="font-bold">1 day ago:</span> Rule "Positive Mentions" triggered by @techguru
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
