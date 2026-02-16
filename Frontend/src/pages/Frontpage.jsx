import { Link } from 'react-router-dom'

function Frontpage() {
	return (
		<div
			className="min-h-screen text-black"
			style={{
				backgroundImage:
					"linear-gradient(135deg, #ffffff 0%, #f2f2f2 55%, #e6e6e6 100%), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
				backgroundSize: "auto, 40px 40px, 40px 40px",
			}}
		>
			<div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6">
				<header className="flex items-center justify-between py-8">
					<div className="flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/60 bg-white text-xs font-semibold tracking-[0.35em]">
							LF
						</div>
						<div>
							<p
								className="text-base font-semibold"
								style={{ fontFamily: '"Space Grotesk", "Sora", sans-serif' }}
							>
								Lost & Found
							</p>
							<p className="text-xs uppercase tracking-[0.35em] text-black/60">
								Campus system
							</p>
						</div>
					</div>
					<nav className="hidden items-center gap-6 text-sm text-black/70 md:flex">
						<Link to="/aboutus" className="transition hover:text-black">About</Link>
						<Link to="/login" className="transition hover:text-black">Login</Link>
						<Link
							to="/register"
							className="rounded-full border border-black/50 px-4 py-2 text-black transition hover:bg-black hover:text-white"
						>
							Register
						</Link>
					</nav>
				</header>

				<section className="grid flex-1 items-center gap-10 pb-12 md:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-6">
						<p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/50">Lost & Found Management</p>
						<h1
							className="text-4xl leading-tight md:text-6xl"
							style={{ fontFamily: '"Space Grotesk", "Sora", sans-serif' }}
						>
							A clean, secure way to report and recover campus items.
						</h1>
						<p className="max-w-xl text-base text-black/70 md:text-lg">
							Post a report in minutes, track matches automatically, and complete verified handoffs.
						</p>
						<div className="flex flex-wrap items-center gap-4">
							<Link
								to="/register"
								className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5"
							>
								Create account
							</Link>
							<Link
								to="/login"
								className="rounded-full border border-black/50 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
							>
								I already have one
							</Link>
						</div>
					</div>

					<div className="relative" style={{ perspective: '1400px' }}>
						<div
							className="rounded-3xl border border-black/40 bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
							style={{ transform: 'rotateX(10deg) rotateY(-18deg) translateZ(0)' }}
						>
							<p className="text-xs uppercase tracking-[0.35em] text-black/50">System overview</p>
							<div className="mt-4 space-y-3 text-sm text-black/70">
								<p>Submit lost or found reports with clear details.</p>
								<p>Receive match alerts and verify ownership.</p>
								<p>Close cases fast with secure handoffs.</p>
							</div>
						</div>
						<div
							className="absolute -bottom-6 left-6 rounded-3xl border border-black/20 bg-black p-6 text-white shadow-[0_26px_50px_rgba(0,0,0,0.2)]"
							style={{ transform: 'rotateX(10deg) rotateY(-18deg) translateZ(-20px)' }}
						>
							<p className="text-xs uppercase tracking-[0.35em] text-white/60">Trusted handoffs</p>
							<p className="mt-3 text-sm text-white/80">
								One dashboard for students, staff, and security teams.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Frontpage
