export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Daily thread summaries for{" "}
          <span className="text-[#58a6ff]">busy Slack channels</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop drowning in Slack noise. Get a concise daily digest of important threads, key decisions, and action items — delivered straight to your inbox every morning.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $19/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="border-t border-[#21262d] bg-[#161b22]">
        <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl mb-2">🔗</div>
            <h3 className="font-semibold text-white mb-1">Slack OAuth</h3>
            <p className="text-sm text-[#8b949e]">Connect any workspace in seconds with secure OAuth.</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-white mb-1">AI Filtering</h3>
            <p className="text-sm text-[#8b949e]">AI identifies decisions, blockers, and key threads automatically.</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📬</div>
            <h3 className="font-semibold text-white mb-1">Daily Email</h3>
            <p className="text-sm text-[#8b949e]">Digest lands in your inbox every morning, ready to skim.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple pricing</h2>
        <p className="text-[#8b949e] mb-8">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-6">per workspace</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited channels monitored",
              "AI-powered thread summarization",
              "Daily digest email delivery",
              "Highlight decisions & action items",
              "Slack OAuth — no bots to install",
              "Cancel anytime"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get started — $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to Slack?</h3>
            <p className="text-sm text-[#8b949e]">We use Slack's official OAuth flow. You authorize the app for your workspace and select which channels to monitor — no manual bot setup required.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">What does the AI actually summarize?</h3>
            <p className="text-sm text-[#8b949e]">The AI reads thread replies, identifies decisions made, open questions, and action items, then writes a short human-readable summary for each important thread.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Slack Thread Digest. All rights reserved.
      </footer>
    </main>
  );
}
