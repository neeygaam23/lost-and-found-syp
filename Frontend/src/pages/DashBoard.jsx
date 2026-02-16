import { Link, useNavigate } from 'react-router-dom'

const overview = [
	{ label: 'Active investigations', value: '26', trend: '+4 this week' },
	{ label: 'Items matched', value: '118', trend: '92% confidence' },
	{ label: 'Pickups scheduled', value: '9', trend: 'Next: 3:30 PM' },
]

const quickActions = [
	{ title: 'Create new report', detail: 'Log a lost or found item in 2 minutes.' },
	{ title: 'Review smart matches', detail: 'Confirm top matches awaiting approval.' },
	{ title: 'Schedule pickup', dejatail: 'Generate a secure handoff code.' },
]

const recentReports = [
	{
		title: 'Graphite laptop sleeve',
		meta: 'Lost near Block C, 1 hour ago',
		status: 'Awaiting match',
	},
	{
		title: 'Gold pendant',
		meta: 'Found at Cafeteria, 20 mins ago',
		status: 'Owner notified',
	},
	{
		title: 'Blue Samsung phone',
		meta: 'Lost near Parking Bay, yesterday',
		status: 'Under review',
	},
]

const matchAlerts = [
	{
		title: 'Likely match: Black JBL headphones',
		meta: '92% match score, Library North',
		action: 'Confirm now',
	},
	{
		title: 'Possible match: ID card (A. Rana)',
		meta: '86% match score, Admin Block',
		action: 'Review details',
	},
]

const pickupQueue = [
	{
		title: 'Pickup code: 7F3-21A',
		meta: 'Student center desk, 4:10 PM',
		status: 'Scheduled',
	},
	{
		title: 'Pickup code: 2BC-909',
		meta: 'Security office, 5:00 PM',
		status: 'Awaiting confirmation',
	},
]

function DashBoard() {
	const navigate = useNavigate()
	const userName = localStorage.getItem('lf_user_name') || 'Verified User'
	const userRole = localStorage.getItem('lf_user_role') || 'User'
	const userEmail = localStorage.getItem('lf_user_email') || 'verified@campus.edu'

	const handleSignOut = () => {
		localStorage.removeItem('lf_verified')
		localStorage.removeItem('lf_user_name')
		localStorage.removeItem('lf_user_role')
		localStorage.removeItem('lf_user_email')
		navigate('/')
	}

	return (
		<div
			className="relative min-h-screen bg-[#f5f1ea] text-[#1b1b1b] overflow-hidden"
			style={{ fontFamily: '"Space Grotesk", sans-serif' }}
		>
			<div className="orb orb-brown float-slow left-[-10%] top-[10%] h-64 w-64" />
			<div className="orb orb-ink float-fast right-[-8%] top-[20%] h-72 w-72" />
			<div className="relative overflow-hidden border-b border-black/10">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(63,45,31,0.12),_transparent_60%),radial-gradient(circle_at_right,_rgba(0,0,0,0.06),_transparent_55%)]" />
				<div className="relative mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
					<div className="flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3f2d1f] text-white font-black">
							LF
						</div>
						<div>
							<p className="text-base font-semibold">Operations Dashboard</p>
							<p className="text-xs uppercase tracking-[0.2em] text-black/60">Verified access</p>
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-3 text-xs text-black/70">
						<Link to="/" className="rounded-full border border-black/20 px-4 py-2 transition hover:border-black">
							Home
						</Link>
						<Link to="/aboutus" className="rounded-full border border-black/20 px-4 py-2 transition hover:border-black">
							About
						</Link>
						<button
							type="button"
							onClick={handleSignOut}
							className="rounded-full bg-black px-4 py-2 text-white transition hover:bg-black/80"
						>
							Sign out
						</button>
					</div>
				</div>
			</div>

			<section className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-8 md:grid-cols-[1.2fr_0.8fr]">
				<div className="surface tilt-card rounded-3xl p-6 rise-in">
					<p className="text-xs uppercase tracking-[0.25em] text-black/60">Welcome back</p>
					<h1 className="font-display mt-3 text-4xl">{userName}</h1>
					<p className="mt-2 text-sm text-black/70">
						{userRole} account · {userEmail}
					</p>
					<div className="mt-6 grid gap-4 sm:grid-cols-3">
						{overview.map((item) => (
							<div key={item.label} className="tilt-card rounded-2xl border border-black/10 bg-white p-4">
								<p className="text-2xl font-semibold">{item.value}</p>
								<p className="text-xs uppercase tracking-[0.2em] text-black/50">{item.label}</p>
								<p className="mt-2 text-xs text-black/60">{item.trend}</p>
							</div>
						))}
					</div>
				</div>

				<div className="surface-dark tilt-card rounded-3xl p-6 rise-in stagger-1">
					<p className="text-xs uppercase tracking-[0.25em] text-white/60">Priority action</p>
					<h2 className="font-display mt-3 text-2xl">2 matches need review</h2>
					<p className="mt-3 text-sm text-white/70">
						Confirm the matches to notify owners and issue handoff codes.
					</p>
					<button
						type="button"
						className="mt-6 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2d1f] transition hover:-translate-y-0.5"
					>
						Open match queue
					</button>
				</div>
			</section>

			<section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-12 lg:grid-cols-[1fr_1fr_0.8fr]">
				<div className="surface tilt-card rounded-3xl p-6 rise-in">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">Quick actions</h3>
						<span className="text-xs text-black/50">Updated now</span>
					</div>
					<div className="mt-4 space-y-3">
						{quickActions.map((action) => (
							<div key={action.title} className="tilt-card rounded-2xl border border-black/10 bg-white p-4">
								<p className="text-sm font-semibold">{action.title}</p>
								<p className="text-xs text-black/60">{action.detail}</p>
							</div>
						))}
					</div>
				</div>

				<div className="surface tilt-card rounded-3xl p-6 rise-in stagger-1">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">Recent reports</h3>
						<span className="text-xs text-black/50">Last 24 hours</span>
					</div>
					<div className="mt-4 space-y-3">
						{recentReports.map((report) => (
							<div key={report.title} className="tilt-card rounded-2xl border border-black/10 bg-white p-4">
								<p className="text-sm font-semibold">{report.title}</p>
								<p className="text-xs text-black/60">{report.meta}</p>
								<span className="mt-3 inline-flex rounded-full border border-black/20 px-3 py-1 text-xs text-black/70">
									{report.status}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className="space-y-4">
					<div className="surface tilt-card rounded-3xl p-6 rise-in stagger-2">
						<h3 className="text-lg font-semibold">Match alerts</h3>
						<div className="mt-4 space-y-3">
							{matchAlerts.map((alert) => (
								<div key={alert.title} className="tilt-card rounded-2xl border border-black/10 bg-white p-4">
									<p className="text-sm font-semibold">{alert.title}</p>
									<p className="text-xs text-black/60">{alert.meta}</p>
									<button
										type="button"
										className="mt-3 rounded-full border border-black/20 px-3 py-1 text-xs text-black/80 transition hover:border-black"
									>
										{alert.action}
									</button>
								</div>
							))}
						</div>
					</div>

					<div className="surface-dark tilt-card rounded-3xl p-6 rise-in stagger-3">
						<h3 className="text-lg font-semibold">Pickup queue</h3>
						<div className="mt-4 space-y-3">
							{pickupQueue.map((pickup) => (
								<div key={pickup.title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
									<p className="text-sm font-semibold">{pickup.title}</p>
									<p className="text-xs text-white/70">{pickup.meta}</p>
									<span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs text-[#3f2d1f]">
										{pickup.status}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default DashBoard
