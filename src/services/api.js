const BASE_URL = import.meta.env.VITE_API_URL

// Auth
export async function loginUser(email, password) {
    const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    if (!res.ok) throw new Error('Invalid credentials')
    return res.json()
}

// Decision
export async function getDecision(user_id, experiment_id) {
    const res = await fetch(`${BASE_URL}/decision/?user_id=${user_id}&experiment_id=${experiment_id}`)
    if (!res.ok) throw new Error('Failed to get decision')
    return res.json()
}

// Events
export async function trackEvent(data) {
    const res = await fetch(`${BASE_URL}/event/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error('Failed to track event')
    return res.json()
}

// Feature Flags
export async function getFlag(key, user_id) {
    const res = await fetch(`${BASE_URL}/flag/${key}?user_id=${user_id}`)
    if (!res.ok) throw new Error('Failed to get flag')
    return res.json()
}

// Analytics
export async function getAnalytics(experiment_id) {
    const res = await fetch(`${BASE_URL}/analytics/${experiment_id}`)
    if (!res.ok) throw new Error('Failed to get analytics')
    return res.json()
}